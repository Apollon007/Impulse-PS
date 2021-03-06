/**
 * Streams
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * I used to think
 *
 * @license MIT
 */

'use strict';

const BUF_SIZE = 65536 * 4;

class ReadStream {
	/** @param {{[k: string]: any} | NodeJS.ReadableStream | string | Buffer} optionsOrStreamLike */
	constructor(optionsOrStreamLike = {}) {
		this.buf = Buffer.allocUnsafe(BUF_SIZE);
		this.bufStart = 0;
		this.bufEnd = 0;
		this.bufCapacity = BUF_SIZE;
		// TypeScript bug: can't infer type
		/** @type {number} */
		this.readSize = 0;
		this.atEOF = false;
		this.encoding = 'utf8';

		/** @type {true} */
		this.isReadable = true;
		this.isWritable = false;

		/** @type {NodeJS.ReadableStream?} */
		this.nodeReadableStream = null;

		/** @type {(() => void)?} */
		this.nextPushResolver = null;
		/** @type {Promise<void>} */
		this.nextPush = new Promise(resolve => {
			this.nextPushResolver = resolve;
		});
		this.awaitingPush = false;

		let options;
		if (typeof optionsOrStreamLike === 'string') {
			options = {buffer: optionsOrStreamLike};
		} else if (optionsOrStreamLike instanceof Buffer) {
			options = {buffer: optionsOrStreamLike};
		} else if (typeof /** @type {any} */ (optionsOrStreamLike)._readableState === 'object') {
			options = {nodeStream: /** @type {NodeJS.ReadableStream} */ (optionsOrStreamLike)};
		} else {
			options = optionsOrStreamLike;
		}
		if (options.nodeStream) {
			const nodeStream = /** @type {NodeJS.ReadableStream} */ (options.nodeStream);
			this.nodeReadableStream = nodeStream;
			nodeStream.on('data', data => {
				this.push(data);
			});
			nodeStream.on('end', () => {
				this.push(null);
			});
			/**
			 * @this {ReadStream}
			 * @param {number} bytes
			 */
			options.read = function (bytes) {
				this.nodeReadableStream.resume();
			};
			/**
			 * @this {ReadStream}
			 * @param {number} bytes
			 */
			options.pause = function (bytes) {
				this.nodeReadableStream.pause();
			};
		}

		if (options.read) this._read = options.read;
		if (options.pause) this._pause = options.pause;
		if (options.destroy) this._destroy = options.read;
		if (options.encoding) this.encoding = options.encoding;
		if (options.buffer !== undefined) {
			this.push(options.buffer);
			this.push(null);
		}
	}
	get bufSize() {
		return this.bufEnd - this.bufStart;
	}
	moveBuf() {
		if (this.bufStart !== this.bufEnd) {
			this.buf.copy(this.buf, 0, this.bufStart, this.bufEnd);
		}
		this.bufEnd -= this.bufStart;
		this.bufStart = 0;
	}
	expandBuf(newCapacity = this.bufCapacity * 2) {
		const newBuf = Buffer.allocUnsafe(newCapacity);
		this.buf.copy(newBuf, 0, this.bufStart, this.bufEnd);
		this.bufEnd -= this.bufStart;
		this.bufStart = 0;
		this.buf = newBuf;
	}
	/**
	 * @param {number} additionalCapacity
	 */
	ensureCapacity(additionalCapacity) {
		if (this.bufEnd + additionalCapacity <= this.bufCapacity) return;
		const capacity = this.bufEnd - this.bufStart + additionalCapacity;
		if (capacity <= this.bufCapacity) {
			return this.moveBuf();
		}
		let newCapacity = this.bufCapacity * 2;
		while (newCapacity < capacity) newCapacity *= 2;
		this.expandBuf(newCapacity);
	}
	/**
	 * @param {Buffer | string | null} buf
	 */
	push(buf, encoding = this.encoding) {
		let size;
		if (buf === null) {
			this.atEOF = true;
			this.resolvePush();
			return;
		} else if (typeof buf === 'string') {
			size = Buffer.byteLength(buf, encoding);
			this.ensureCapacity(size);
			this.buf.write(buf, this.bufEnd);
		} else {
			size = buf.length;
			this.ensureCapacity(size);
			buf.copy(this.buf, this.bufEnd);
		}
		this.bufEnd += size;
		if (this.bufSize > this.readSize && size * 2 < this.bufSize) this._pause();
		this.resolvePush();
	}
	resolvePush() {
		if (!this.nextPushResolver) throw new Error(`Push after end of read stream`);
		this.nextPushResolver();
		if (this.atEOF) {
			this.nextPushResolver = null;
			return;
		}
		this.nextPush = new Promise(resolve => {
			this.nextPushResolver = resolve;
		});
	}
	/**
	 * @param {number} [size]
	 * @return {void | Promise<void>}
	 */
	_read(size = 0) {
		throw new Error(`ReadStream needs to be subclassed and the _read function needs to be implemented.`);
	}
	_destroy() {}
	_pause() {}
	/**
	 * @param {number?} byteCount
	 */
	async loadIntoBuffer(byteCount = null) {
		if (byteCount === null && this.bufSize) return;
		if (byteCount === 0) return;
		this.readSize = Math.max(byteCount || 1, this.readSize);
		/** @type {number?} */
		let bytes = this.readSize - this.bufSize;
		if (bytes === Infinity || byteCount === null) bytes = null;
		while (!this.atEOF && this.bufSize < this.readSize) {
			let readResult = (bytes ? this._read(bytes) : this._read());
			// @ts-ignore
			if (readResult && readResult.then) {
				await readResult;
			} else {
				await this.nextPush;
			}
		}
	}
	/**
	 * @param {number?} byteCount
	 */
	async peek(byteCount = null, encoding = this.encoding) {
		if (byteCount === null && this.bufSize) return this.buf.toString(encoding, this.bufStart, this.bufEnd);
		await this.loadIntoBuffer(byteCount);
		if (byteCount === null) return this.buf.toString(encoding, this.bufStart, this.bufEnd);
		if (byteCount > this.bufSize) byteCount = this.bufSize;
		if (!this.bufSize) return null;
		return this.buf.toString(encoding, this.bufStart, this.bufStart + byteCount);
	}
	/**
	 * @param {number?} byteCount
	 */
	async peekBuffer(byteCount = null) {
		if (byteCount === null && this.bufSize) return this.buf.slice(this.bufStart, this.bufEnd);
		await this.loadIntoBuffer(byteCount);
		if (byteCount === null) return this.buf.slice(this.bufStart, this.bufEnd);
		if (byteCount > this.bufSize) byteCount = this.bufSize;
		if (!this.bufSize) return null;
		return this.buf.slice(this.bufStart, this.bufStart + byteCount);
	}
	/**
	 * @param {number? | string} byteCount
	 */
	async read(byteCount = null, encoding = this.encoding) {
		if (typeof byteCount === 'string') {
			encoding = byteCount;
			byteCount = null;
		}
		const out = await this.peek(byteCount, encoding);
		if (byteCount === null || byteCount >= this.bufSize) {
			this.bufStart = 0;
			this.bufEnd = 0;
		} else {
			this.bufStart += byteCount;
		}
		return out;
	}
	/**
	 * @param {number?} byteCount
	 */
	async readBuffer(byteCount = null) {
		const out = await this.peekBuffer(byteCount);
		if (byteCount === null || byteCount >= this.bufSize) {
			this.bufStart = 0;
			this.bufEnd = 0;
		} else {
			this.bufStart += byteCount;
		}
		return out;
	}
	/**
	 * @param {string} symbol
	 */
	async indexOf(symbol, encoding = this.encoding) {
		let idx = this.buf.indexOf(symbol, this.bufStart, encoding);
		while (!this.atEOF && (idx >= this.bufEnd || idx < 0)) {
			await this.loadIntoBuffer();
			idx = this.buf.indexOf(symbol, this.bufStart, encoding);
		}
		if (idx >= this.bufEnd) return -1;
		return idx - this.bufStart;
	}
	async readAll(encoding = this.encoding) {
		return (await this.read(Infinity, encoding)) || '';
	}
	peekAll(encoding = this.encoding) {
		return this.peek(Infinity, encoding);
	}
	/**
	 * @param {string} symbol
	 */
	async readDelimitedBy(symbol, encoding = this.encoding) {
		if (this.atEOF && !this.bufSize) return null;
		const idx = await this.indexOf(symbol, encoding);
		if (idx < 0) {
			return this.readAll(encoding);
		} else {
			const out = await this.read(idx, encoding);
			this.bufStart += Buffer.byteLength(symbol, 'utf8');
			return out;
		}
	}
	async readLine(encoding = this.encoding) {
		if (!encoding) throw new Error(`readLine must have an encoding`);
		let line = /** @type {string} */ (await this.readDelimitedBy('\n', encoding));
		if (line.endsWith('\r')) line = line.slice(0, -1);
		return line;
	}
	async destroy() {
		return this._destroy();
	}
	async next(byteCount = null) {
		const value = await this.read(byteCount);
		return {value, done: value === null};
	}
	/**
	 * @param {WriteStream} outStream
	 */
	async pipeTo(outStream, options = {}) {
		let value, done;
		while (({value, done} = await this.next(), !done)) {
			await outStream.write(value);
		}
		if (!options.noEnd) outStream.end();
	}
}

class WriteStream {
	constructor(options = {}) {
		this.isReadable = false;
		/** @type {true} */
		this.isWritable = true;
		this.encoding = 'utf8';

		/** @type {NodeJS.ReadableStream?} */
		this.nodeWritableStream = null;

		if (options._writableState) {
			options = {nodeStream: options};
		}
		if (options.nodeStream) {
			const nodeStream = /** @type {NodeJS.ReadableStream} */ (options.nodeStream);
			this.nodeWritableStream = nodeStream;
			/**
			 * @this {WriteStream}
			 * @param {string | Buffer} data
			 */
			options.write = function (data) {
				const result = this.nodeWritableStream.write(data);
				if (result === false) {
					return new Promise(resolve => {
						this.nodeWritableStream.once('drain', () => {
							resolve();
						});
					});
				}
			};
			options.end = function () {
				return new Promise(resolve => {
					this.nodeWritableStream.end(() => resolve());
				});
			};
		}

		if (options.write) this._write = options.write;
		if (options.end) this._end = options.end;
	}
	/**
	 * @param {Buffer | string | null} chunk
	 * @return {Promise<boolean>}
	 */
	async write(chunk) {
		if (chunk === null) {
			await this.end();
			return false;
		}
		await this._write(chunk);
		return true;
	}
	/**
	 * @param {string | null} chunk
	 * @return {Promise<boolean>}
	 */
	async writeLine(chunk) {
		if (chunk === null) {
			await this.end();
			return false;
		}
		return this.write(chunk + '\n');
	}
	/**
	 * @param {Buffer | string} chunk
	 * @return {void | Promise<void>}
	 */
	_write(chunk) {
		throw new Error(`WriteStream needs to be subclassed and the _write function needs to be implemented.`);
	}
	async _end() {}
	/**
	 * @param {string | null} chunk
	 * @return {Promise<void>}
	 */
	async end(chunk = null) {
		if (chunk) {
			await this.write(chunk);
		}
		return this._end();
	}
}

class ReadWriteStream extends ReadStream {
	constructor(options = {}) {
		super(options);
		/** @type {true} */
		this.isReadable = true;
		/** @type {true} */
		this.isWritable = true;
	}
	/**
	 * @param {Buffer | string} chunk
	 * @return {Promise<void>}
	 */
	write(chunk) {
		return this._write(chunk);
	}
	/**
	 * @param {string} chunk
	 * @return {Promise<void>}
	 */
	writeLine(chunk) {
		return this.write(chunk + '\n');
	}
	/**
	 * @param {Buffer | string} chunk
	 * @return {Promise<void>}
	 */
	_write(chunk) {
		throw new Error(`WriteStream needs to be subclassed and the _write function needs to be implemented.`);
	}
	/**
	 * In a ReadWriteStream, _read does not need to be implemented
	 */
	_read() {}
	async _end() {}
	async end() {
		return this._end();
	}
}

module.exports = {
	ReadStream,
	WriteStream,
	ReadWriteStream,

	readAll(/** @type {NodeJS.ReadableStream} */ nodeStream, encoding = undefined) {
		return new ReadStream(nodeStream).readAll(encoding);
	},
};
