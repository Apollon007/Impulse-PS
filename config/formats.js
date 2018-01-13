'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
	},
	{
		name: "[Gen 7] Random Battle",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable."],

		mod: 'gen7',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Unrated Random Battle",

		mod: 'gen7',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] OU",

		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3621042/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587177/\">OU Banlist</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3621329/\">OU Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3606650/\">OU Sample Teams</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 7] Ubers",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587184/\">Ubers Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3623296/\">Ubers Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3599816/\">Ubers Sample Teams</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 7] UU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3621032/\">UU Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3620980/\">UU Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3621217/\">UU Sample Teams</a>",
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Kommonium Z', 'Mewnium Z'],
	},
	{
		name: "[Gen 7] RU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3621166/\">RU Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3622740/\">RU Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3622057/\">RU Sample Teams</a>",
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] UU'],
		banlist: ['UU', 'BL2', 'Aurora Veil'],
	},
	{
		name: "[Gen 7] NU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3621260/\">NU Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3622107/\">NU Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3606112/\">NU Sample Teams</a>",
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] RU'],
		banlist: ['RU', 'BL3', 'Drought'],
	},
	{
		name: "[Gen 7] NU (suspect test)",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/3624392/\">NU Suspect Test</a>"],

		mod: 'gen7',
		challengeShow: false,
		ruleset: ['[Gen 7] NU'],
	},
	{
		name: "[Gen 7] PU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3614120/\">PU Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3614892/\">PU Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3614470/\">PU Sample Teams</a>",
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] NU'],
		banlist: ['NU', 'BL4'],
	},
	{
		name: "[Gen 7] LC",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587196/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/dex/sm/formats/lc/\">LC Banlist</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3621440/\">LC Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3588679/\">LC Sample Teams</a>",
		],

		mod: 'gen7',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Little Cup'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix-Base', 'Yanma',
			'Eevium Z', 'Dragon Rage', 'Sonic Boom',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: [
			"All the Pok&eacute;mon on a team must share a type.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3621036/\">Monotype Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3622349\">Monotype Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3599682/\">Monotype Sample Teams</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 7] Anything Goes",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587441/\">Anything Goes</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3591711/\">AG Resources</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "[Gen 7] CAP",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587865/\">CAP Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3597893/\">CAP Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/7203358/\">CAP Sample Teams</a>",
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU', 'Allow CAP'],
		banlist: ['Tomohawk + Earth Power', 'Tomohawk + Reflect'],
	},
	{
		name: "[Gen 7] CAP LC",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/3599594/\">CAP LC</a>"],

		mod: 'gen7',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['[Gen 7] LC', 'Allow CAP'],
	},
	{
		name: "[Gen 7] Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3601012/\">Introduction to Battle Spot Singles</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3605970/\">Battle Spot Singles Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3601658/\">Battle Spot Singles Roles Compendium</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3593055/\">Battle Spot Singles Sample Teams</a>",
		],

		mod: 'gen7',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Battle Spot Special 7",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/3621403/\">Battle Spot Special: Season 7</a>"],

		mod: 'gen7',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Alola Pokedex'],
		banlist: ['Poipole', 'Naganadel', 'Stakataka', 'Blacephalon'],
		requirePlus: true,
	},
	{
		name: "[Gen 7] Dragon Cup",
		desc: [`&bullet; <a href="https://3ds.pokemon-gl.com/dl-regulation/6010">Dragon Cup: Official rules</a>`],

		mod: 'gen7',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		timer: {starting: 15 * 60 - 10, perTurn: 10, maxPerTurn: 60, maxFirstTurn: 90, timeoutAutoChoose: true},
		ruleset: ['Pokemon', 'Minimal GBU', 'Team Preview'],
		onValidateTeam: function (team) {
			const restrictedLegends = ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma'];
			let count = 0;
			for (const set of team) {
				const baseSpecies = this.getTemplate(set.species).baseSpecies;
				if (restrictedLegends.includes(baseSpecies)) count++;
				if (count > 1) return ["You can only use one Restricted Legendary Pok\u00E9mon."];
			}
		},
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// US/UM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles",
	},
	{
		name: "[Gen 7] Random Doubles Battle",

		mod: 'gen7',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Doubles OU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3623271/\">Doubles OU Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3623347/\">Doubles OU Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3590987/\">Doubles OU Sample Teams</a>",
		],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Swagger Clause', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala',
			'Magearna', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Eevium Z', 'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder',
		],
	},
	{
		name: "[Gen 7] Doubles Ubers",

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Dark Void'],
	},
	{
		name: "[Gen 7] Doubles UU",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/3598014/\">Doubles UU Metagame Discussion</a>"],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['[Gen 7] Doubles OU'],
		banlist: [
			'Aegislash', 'Amoonguss', 'Arcanine', 'Blacephalon', 'Bronzong', 'Celesteela', 'Charizard-Mega-Y', 'Deoxys-Attack', 'Diancie', 'Diancie-Mega',
			'Excadrill', 'Ferrothorn', 'Garchomp', 'Gardevoir-Mega', 'Gastrodon', 'Genesect', 'Gengar-Mega', 'Heatran', 'Hoopa-Unbound', 'Jirachi',
			'Kangaskhan-Mega', 'Kartana', 'Kingdra', 'Kyurem-Black', 'Landorus-Therian', 'Ludicolo', 'Lycanroc-Dusk', 'Marowak-Alola', 'Marshadow',
			'Mawile-Mega', 'Metagross-Mega', 'Milotic', 'Mimikyu', 'Naganadel', 'Ninetales-Alola', 'Oranguru', 'Pelipper', 'Politoed', 'Porygon2',
			'Salamence-Mega', 'Scrafty', 'Snorlax', 'Stakataka', 'Suicune', 'Swampert-Mega', 'Tapu Bulu', 'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Tyranitar',
			'Volcanion', 'Volcarona', 'Weavile', 'Whimsicott', 'Zapdos', 'Zygarde-Base',
		],
	},
	{
		name: "[Gen 7] VGC 2018",

		mod: 'gen7',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {starting: 15 * 60 - 10, perTurn: 10, maxPerTurn: 60, maxFirstTurn: 90, timeoutAutoChoose: true},
		ruleset: ['Pokemon', 'Standard GBU'],
		banlist: ['Unown'],
		requirePlus: true,
	},
	{
		name: "[Gen 7] VGC 2017",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3583926/\">VGC 2017 Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3591794/\">VGC 2017 Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3590391/\">VGC 2017 Sample Teams</a>",
		],

		mod: 'vgc17',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {starting: 15 * 60 - 10, perTurn: 10, maxPerTurn: 60, maxFirstTurn: 90, timeoutAutoChoose: true},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod', 'Alola Pokedex'],
		banlist: ['Illegal', 'Unreleased', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zygarde', 'Mega'],
		requirePlus: true,
	},
	{
		name: "[Gen 7] Battle Spot Doubles",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3595001/\">Battle Spot Doubles Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3593890/\">Battle Spot Doubles Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3595859/\">Battle Spot Doubles Sample Teams</a>",
		],

		mod: 'gen7',
		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	///////////////////////////////////////////////////////
	// Server Metagames
	{
		section: '' + serverName + ' Metagames',
		column: 2,
	},
	{
		name: "[Gen 7] Metronome Battle",
		desc: ["&bullet; Metronome battles format: 6v6 singles, Only move allowed is metronome, all healing items/abilities are banned, Ubers (and mega rayquaza) are banned, immunites dont exist in this format (ex normal is not very effective on ghost instead of x0)"],
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Aguav Berry', 'Assault Vest', 'Berry Juice', 'Cheek Pouch', 'Dry Skin', 'Ice Body', 'Poison Heal', 'Regenerator', 'Volt Absorb', 'Water Absorb', 'Rain Dish', 'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Iapapa Berry', 'Mago Berry', 'Oran Berry', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Leftovers'],
		mod: 'metronome',
		onValidateSet: function (set) {
			if (set.moves.length !== 1 || toId(set.moves[0]) !== 'metronome') {
				return [(set.name || set.species) + " can only have Metronome."];
			}
		},
		onEffectiveness: function (typeMod, target, type, move) {
			//change no effect to not very effective
			if (move && !this.getImmunity(move, type)) return 2;
		},
	},
	{
		name: "[Gen 7] Random Metronome Battle",
		desc: ["&bullet; Metronome battles format: 6v6 singles, Only move allowed is metronome, all healing items/abilities are banned, Ubers (and mega rayquaza) are banned, immunites dont exist in this format (ex normal is not very effective on ghost instead of x0)"],
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		team: 'random',
		mod: 'gen7',
		onBegin: function () {
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			allPokemon.forEach(pokemon => {
				pokemon.baseMoveSlots = [{
					move: 'Metronome',
					id: 'metronome',
					pp: 16,
					maxpp: 16,
					target: 'self',
					disabled: false,
					disabledSource: '',
					used: false,
				}];
				pokemon.moves.splice(0, 4);
				pokemon.moves.push('metronome');
				pokemon.moveSlots = pokemon.baseMoveSlots;
				if (Dex.getFormat('[Gen 7] Metronome Battle').banlist.includes(this.getItem(pokemon.item).name)) {
					pokemon.item = 'leppaberry';
				}
			});
		},
		onEffectiveness: function (typeMod, target, type, move) {
			//change no effect to not very effective
			if (move && !this.getImmunity(move, type)) return 2;
		},
	},
	{
		name: "[Gen 7] Super Staff Bros",

		mod: 'ssb',
		team: 'randomSeasonalRegStaff',
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onBegin: function () {
			this.add('message', 'GET READY FOR THE NEXT BATTLE!');

			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				let last = pokemon.moves.length - 1;
				if (pokemon.moves[last]) {
					pokemon.moves.splice(last, 1);
					pokemon.moves.push(toId(pokemon.set.signatureMove));
					pokemon.moveSlots[last].move = pokemon.set.signatureMove;
					pokemon.baseMoveSlots[last].move = pokemon.set.signatureMove;
				}
			}
		},
		onSwitchIn: function (pokemon) {
			let name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			//Add the mon's status effect to it as a volatile.
			if (this.data.Statuses[name] && this.data.Statuses[name].exists) {
				pokemon.addVolatile(name, pokemon);
			}
		},
		onModifyPokemon: function (pokemon) {
			//let name = toId(pokemon.name);
			// Enforce choice item locking on custom moves.
			let moves = pokemon.moveSlots;
			if (pokemon.getItem().isChoice && pokemon.lastMove === moves[3].id) {
				for (let i = 0; i < 3; i++) {
					if (!moves[i].disabled) {
						pokemon.disableMove(moves[i].id, false);
						moves[i].disabled = true;
					}
				}
			}
		},
	},
	{
		name: "[Gen 7] Pokemon Mystery Dungeon",

		mod: 'pmd',
		team: 'randomPmd',
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		onBegin: function () {
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				allPokemon[i].maxhp *= 3;
				allPokemon[i].hp = allPokemon[i].maxhp;
			}
		},
	},
	{
		name: "[Gen 7] Super Staff Bros Free For All",
		desc: ['Duke it out with other users custom made pokemon.',
			'Make your own as well! Get started with <button class="button" name="send" value="/ssb edit">/ssb edit</button>.',
			'Use <button class="button" name="send" value="/ssb">/ssb</button> for the commands you can use.',
		],

		mod: 'cssb',
		team: 'randomCustomSSB',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
		onBegin: function () {
			this.add("raw|<h2>Free for All!</h2>");
			this.add("raw|<h3>3</h3>");
			this.add("raw|<h3>2</h3>");
			this.add("raw|<h3>1</h3>");
			this.add("raw|<h1>BATTLE!</h1>");
		},
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			if (!pokemon.template.isMega) pokemon.canMegaEvo = this.canMegaEvo(pokemon);
		},
	},
	{
		name: "[Gen 7] Digimon Showdown",
		desc: [
			"You may have thought this was Pokemon Showdown, but I must reassure you that you were mistaken, welcome to DIGIMON SHOWDOWN",
			"Ahem, but in all seriousness, the following developers listed below created Digimon in Pokemon Showdown, so why not just try it out :D",
			"Ashley the Pikachu (Head Researcher, Began the project, Attack Manual, Type Chart Manual, Music Selection and Music HTML, Sprite Selection), Insist (Head Developer), AlphaStorm (Animations), Gligars (Assisted other developers), HoeenHero (Assisted with Mechanics)",
		],

		mod: "digimon",
		team: "randomDigimon",
		ruleset: ['Cancel Mod', 'HP Percentage Mod'],
		onBegin: function () {
			this.add('raw', '<center><a title="Digimon Tamers: Zone Digital" href="https://www.youtube.com/watch?v=HSm6CHgujSE" target="_blank"><img src="https://x5zb5g.bn1303.livefilestore.com/y3m7hz_BBUaKCiMAo-__U76Xif0Wl70a-muQxVLAUWjhKrErxeDIfH6HBN0_M4Rac9yLWH7VRKR4FaMgx6LLZjUwkKzxp1FKocL16LjZOXJogV8ltDPockgXW8As2JSvW5h9UC-YT6xlUWIN0nE8N2WRcP0f1HxkxQFv16nCBk1cyU?width=124&amp;height=28&amp;cropmode=none" alt="Digimon Tamers: Zone Digital" width="124" height="28" /></a><a title="Digimon Froniter: With the Will BGM Verison" href="https://www.youtube.com/watch?v=aiEQNKFiVRY" target="_blank"><img src="https://x5ysra.bn1303.livefilestore.com/y3mejTyK4Owu1CRO-2dEV6f5sXEzfxKIBJ8zDCKtGOvH2m6TNHfGwEVBnSFYmJnQ5irfZG5PTm2Q_cvEZSVJOjco65nxgpmgxkh9u6-Z2-67FqIWD4oMfceTWGOqlL0n9zDM8OrjYKBhRI3FqA8vZq_eAc1QSWIRCdWDa21vklS4XA?width=124&amp;height=28&amp;cropmode=none" alt="Digimon Frontier: With the WIll BGM" width="124" height="28" /></a><a title="Digimon Adventure: Shuugeki Soshite..." href="https://www.youtube.com/watch?v=66iMd-lpC9E" target="_blank"><img src="https://x5zilq.bn1303.livefilestore.com/y3mIjynkF0J_iQQ0IeK0jCR1BLEIpgDkRRGUdYSyOOeNyFcaWCkI5W6LrQamjbqgibv203Ss824bh24kF_gBWNhxOBkjg_rdimfGBsN_6a1k64KydPJRTTrZdA6naRzTBOoxg59qQVtt6I0vQ3d5iAfLRoM_JirnCb7jLX-Ok93YL8?width=124&amp;height=28&amp;cropmode=none" alt="Digimon Adventure: Shuugeki! Soshite..." width="124" height="28" /></a><a title="Digimon Xros Wars: Battle In The Digital World" href="https://www.youtube.com/watch?v=xngD8cDZLRQ" target="_blank"><img src="https://x5x9og.bn1303.livefilestore.com/y3mQAOGzN350mT9JOODjaIzJQ4zcLmZ1l4T_5PeAeN-m4zSj4e2tODh563uxlJh8ZflX4HJOOCtXAi5Bchow8eSOIwPcYEWToRrlD-DKcJIB7HxFdKP6zOZceolZjxKSbzk8R9rfKaSqG7y2vn7MfWJ8AQHHipXVt_cEf0vULk-d98?width=124&amp;height=28&amp;cropmode=none" alt="Digimon Xros Wars: Battle In the Digital World" width="124" height="28" /></a></center>');
			this.add('raw', '<center><p><a title="Digimon Showdown Players Guide" href="https://1drv.ms/b/s!AvoD6RnUzzMvgmLcX1rqT8GTnEVK" target="_blank"><img src="https://yheeqg.bn1303.livefilestore.com/y4mcqvreFTM4wIjnVqqSI98LZXT-lFFCxPBYHyHGZtWJTIGuah-spBzqvXbLiWvyJgDnrjSRFziff59ZLLBEtm_t3ZHHeKv9AY6Ml-gQpdGMhNmzaeSt0TD8wmivpfEW81jh93LSBvdXb7-cZUH2YNJwzwiyOTsy4L2dViyJqkiOCFDZhJRIPwPEWgmD7MDJnfafmoq6SN6gEfsAXMiHh529w?width=124&amp;height=42&amp;cropmode=none" alt="" width="124" height="42" /></a></p></center>');
		},
	},
	{
		name: "[Gen 7] Doubles Monotype",
		desc: [
			"All the Pok&eacute;mon on a team must share a type. The battle is fought in the Doubles Format. Banlist is the same as Doubles OU. Requested by Ashley the Pikachu. \"Coded\" by Gligars.",
		],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['[Gen 7] Doubles OU', 'Same Type Clause'],
	},
	{
		name: "[Gen 7] Stacked",
		desc: [
			"All hazards can be stackable and stacked infinitely. Original idea by Serperiorater. Coded by Lycanium Z.",
		],

		mod: 'stacked',
		ruleset: ['[Gen 7] OU'],
	},
	{
		name: "[Gen 7] Weather Wars",
		desc: [
			"Terrain and weather activated by an ability stay permenanetly until overwritten. Original idea by c7. Coded by Lycanium Z.",
		],

		mod: 'oldweather',
		ruleset: ['[Gen 7] OU'],
	},
	{
		name: "[Gen 7] TsuMeta (BETA)",
		desc: [
			"&bullet; <a href=\"http://tsunamips.weebly.com/tsumeta.html\">TsuMeta Information</a>",
		],
		column: 2,

		mod: 'tsumeta',
		ruleset: ['[Gen 7] OU'],
		onSwitchIn: function (pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types[0] + (pokemon.types[1] ? '/' + pokemon.types[1] : ''));
		},
	},
	// Other Metagames
	///////////////////////////////////////////////////////////////////
	{
		section: "OM of the Month",
		column: 3,
	},
	{
		name: "[Gen 7] Inheritance",
		desc: [
			"Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3592844/\">Inheritance</a>",
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['Hoopa-Unbound', 'Kartana', 'Kyurem-Black', 'Regigigas', 'Shedinja', 'Slaking', 'Huge Power', 'Imposter', 'Pure Power', 'Speed Boost', 'Water Bubble', 'Gyaradosite', 'Assist', 'Chatter'],
		noChangeForme: true,
		noChangeAbility: true,
		getEvoFamily: function (species) {
			let template = Dex.getTemplate(species);
			while (template.prevo) {
				template = Dex.getTemplate(template.prevo);
			}
			return template.speciesid;
		},
		validateSet: function (set, teamHas) {
			if (!this.format.abilityMap) {
				let abilityMap = Object.create(null);
				for (let speciesid in Dex.data.Pokedex) {
					let pokemon = Dex.data.Pokedex[speciesid];
					if (pokemon.num < 1 || pokemon.species === 'Smeargle') continue;
					if (Dex.data.FormatsData[speciesid].requiredItem || Dex.data.FormatsData[speciesid].requiredMove) continue;
					for (let key in pokemon.abilities) {
						let abilityId = toId(pokemon.abilities[key]);
						if (abilityMap[abilityId]) {
							abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](speciesid);
						} else {
							abilityMap[abilityId] = [speciesid];
						}
					}
				}
				this.format.abilityMap = abilityMap;
			}

			this.format.noChangeForme = false;
			let problems = Dex.getFormat('Pokemon').onChangeSet.call(Dex, set, this.format) || [];
			this.format.noChangeForme = true;

			if (problems.length) return problems;

			let species = toId(set.species);
			let template = Dex.getTemplate(species);
			if (!template.exists) return [`The Pokemon "${set.species}" does not exist.`];
			if (template.isUnreleased) return [`${template.species} is unreleased.`];
			let megaTemplate = Dex.getTemplate(Dex.getItem(set.item).megaStone);
			if (template.tier === 'Uber' || megaTemplate.tier === 'Uber' || this.format.banlist.includes(template.species)) return [`${megaTemplate.tier === 'Uber' ? megaTemplate.species : template.species} is banned.`];

			let name = set.name;

			let abilityId = toId(set.ability);

			if (!abilityId || !(abilityId in Dex.data.Abilities)) return [`${name} needs to have a valid ability.`];
			let pokemonWithAbility = this.format.abilityMap[abilityId];
			if (!pokemonWithAbility) return [`"${set.ability}" is not available on a legal Pokemon.`];

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).
			let validSources = set.abilitySources = []; // Evolution families
			for (const donor of pokemonWithAbility) {
				let donorTemplate = Dex.getTemplate(donor);
				let evoFamily = this.format.getEvoFamily(donorTemplate);

				if (validSources.indexOf(evoFamily) >= 0) continue;

				if (set.name === set.species) delete set.name;
				set.species = donorTemplate.species;
				problems = this.validateSet(set, teamHas) || [];

				if (!problems.length) {
					canonicalSource = donorTemplate.species;
					validSources.push(evoFamily);
				}
				if (validSources.length > 1) {
					// Specific for the basic implementation of Donor Clause (see onValidateTeam).
					break;
				}
			}

			set.species = template.species;
			if (!validSources.length && pokemonWithAbility.length > 1) {
				return [`${template.species}'s set is illegal.`];
			}
			if (!validSources.length) {
				problems.unshift(`${template.species} has an illegal set with an ability from ${Dex.getTemplate(pokemonWithAbility[0]).name}.`);
				return problems;
			}

			// Protocol: Include the data of the donor species in the `ability` data slot.
			// Afterwards, we are going to reset the name to what the user intended. :]
			set.ability = `${set.ability}0${canonicalSource}`;
		},
		onValidateTeam: function (team, format) {
			// Donor Clause
			let evoFamilyLists = [];
			for (const set of team) {
				if (!set.abilitySources) continue;
				evoFamilyLists.push(set.abilitySources.map(format.getEvoFamily));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			// This clause has only gotten more complex over time, so this is probably a won't fix.
			let requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				let [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) requiredFamilies[familyId] = 1;
				requiredFamilies[familyId]++;
				if (requiredFamilies[familyId] > 2) return [`You are limited to up to two inheritances from each evolution family by the Donor Clause.`, `(You inherit more than twice from ${this.getTemplate(familyId).species}).`];
			}
		},
		onBegin: function () {
			for (const pokemon of this.p1.pokemon.concat(this.p2.pokemon)) {
				if (pokemon.baseAbility.includes('0')) {
					let donor = pokemon.baseAbility.split('0')[1];
					pokemon.donor = toId(donor);
					pokemon.baseAbility = pokemon.baseAbility.split('0')[0];
					pokemon.ability = pokemon.baseAbility;
				}
			}
		},
		onSwitchIn: function (pokemon) {
			if (!pokemon.donor) return;
			let donorTemplate = Dex.getTemplate(pokemon.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.species, '[silent]');
		},
	},
	{
		name: "[Gen 7] Alphabet Cup",
		desc: [
			"Pok&eacute;mon can learn any move it shares the first letter of its name with.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3617977/\">Alphabet Cup</a>",
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		noLearn: ['Geomancy', 'Shell Smash', 'Sketch'],
		onValidateTeam: function (team) {
			let alphabetTable = {};
			for (const set of team) {
				let letter = toId(set.species).slice(0, 1);
				if (alphabetTable[letter]) {
					return ["You are limited to one Pokémon per letter.", "(You have more than one Pokémon beginning with " + letter.toUpperCase() + ")"];
				}
				alphabetTable[letter] = true;
			}
		},
	},
	{
		section: "Other Metagames",
		column: 3,
	},
	{
		name: "[Gen 7] Balanced Hackmons",
		desc: [
			"Anything that can be hacked in-game and is usable in local battles is allowed.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587475/\">Balanced Hackmons</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3588586/\">BH Suspects and Bans Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3593766/\">BH Resources</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'CFZ Clause', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Groudon-Primal', 'Arena Trap', 'Huge Power', 'Innards Out', 'Magnet Pull', 'Moody', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite', 'Chatter', 'Comatose + Sleep Talk'],
	},
	{
		name: "[Gen 7] 1v1",
		desc: [
			"Bring three Pok&eacute;mon to Team Preview and choose one to battle.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587523/\">1v1</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3592842/\">1v1 Resources</a>",
		],

		mod: 'gen7',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: [
			'Illegal', 'Unreleased', 'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Groudon', 'Ho-Oh',
			'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Focus Sash', 'Flash', 'Kinesis', 'Leaf Tornado', 'Mirror Shot', 'Mud Bomb', 'Mud-Slap', 'Muddy Water', 'Night Daze', 'Octazooka', 'Perish Song', 'Sand Attack', 'Smokescreen',
			'Chansey + Charm + Seismic Toss', 'Chansey + Charm + Psywave',
		],
	},
	{
		name: "[Gen 7] 1v1 (suspect test)",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/posts/7626392/\">1v1 Suspect Test</a>"],

		mod: 'gen7',
		challengeShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['[Gen 7] 1v1'],
	},
	{
		name: "[Gen 7] Mix and Mega",
		desc: [
			"Mega Stones and Primal Orbs can be used on almost any fully evolved Pok&eacute;mon with no Mega Evolution limit.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587740/\">Mix and Mega</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3591580/\">Mix and Mega Resources</a>",
		],

		mod: 'mixandmega',
		ruleset: ['Pokemon', 'Standard', 'Mega Rayquaza Clause', 'Team Preview'],
		banlist: ['Shadow Tag', 'Gengarite', 'Baton Pass', 'Electrify'],
		bannedStones: ['Beedrillite', 'Blazikenite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Ultranecrozium Z'],
		cannotMega: [
			'Arceus', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Dragonite', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow',
			'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Slaking', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
		],
		onValidateTeam: function (team) {
			let itemTable = {};
			for (const set of team) {
				let item = this.getItem(set.item);
				if (!item) continue;
				if (itemTable[item] && item.megaStone) return ["You are limited to one of each Mega Stone.", "(You have more than one " + this.getItem(item).name + ")"];
				if (itemTable[item] && (item.id === 'blueorb' || item.id === 'redorb')) return ["You are limited to one of each Primal Orb.", "(You have more than one " + this.getItem(item).name + ")"];
				itemTable[item] = true;
			}
		},
		onValidateSet: function (set, format) {
			let template = this.getTemplate(set.species || set.name);
			let item = this.getItem(set.item);
			if (!item.megaEvolves && item.id !== 'blueorb' && item.id !== 'redorb' && item.id !== 'ultranecroziumz') return;
			if (template.baseSpecies === item.megaEvolves || (template.baseSpecies === 'Groudon' && item.id === 'redorb') || (template.baseSpecies === 'Kyogre' && item.id === 'blueorb') || (template.species.substr(0, 9) === 'Necrozma-' && item.id === 'ultranecroziumz')) return;
			if (template.evos.length) return ["" + template.species + " is not allowed to hold " + item.name + " because it's not fully evolved."];
			let uberStones = format.bannedStones || [];
			let uberPokemon = format.cannotMega || [];
			if (uberPokemon.includes(template.name) || set.ability === 'Power Construct' || uberStones.includes(item.name)) return ["" + template.species + " is not allowed to hold " + item.name + "."];
		},
		onBegin: function () {
			for (const pokemon of this.p1.pokemon.concat(this.p2.pokemon)) {
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
		},
		onSwitchIn: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
				let oTemplate = this.getTemplate(pokemon.originalSpecies);
				if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 7] Almost Any Ability",
		desc: [
			"Pok&eacute;mon can use any ability, barring the few that are banned.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587901/\">Almost Any Ability</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3595753/\">AAA Resources</a>",
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] OU', 'Ability Clause', 'Ignore Illegal Abilities'],
		banlist: ['Archeops', 'Dragonite', 'Hoopa-Unbound', 'Kartana', 'Keldeo', 'Kyurem-Black', 'Regigigas', 'Shedinja', 'Slaking', 'Terrakion'],
		unbanlist: ['Genesect', 'Landorus', 'Metagross-Mega', 'Naganadel'],
		bannedAbilities: [
			'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Huge Power', 'Illusion', 'Imposter', 'Innards Out',
			'Parental Bond', 'Protean', 'Pure Power', 'Simple', 'Speed Boost', 'Stakeout', 'Water Bubble', 'Wonder Guard',
		],
		onValidateSet: function (set, format) {
			let bannedAbilities = format.bannedAbilities || [];
			if (bannedAbilities.includes(set.ability)) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
		},
	},
	{
		name: "[Gen 7] Camomons",
		desc: [
			"Pok&eacute;mon change type to match their first two moves.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3598418/\">Camomons</a>",
		],
		mod: 'gen7',
		ruleset: ['[Gen 7] OU'],
		banlist: ['Shedinja'],
		onModifyTemplate: function (template, target, source) {
			if (source) return;
			let types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.getMove(move.id).type))];
			return Object.assign({}, template, {types: types});
		},
		onSwitchInPriority: 2,
		onSwitchIn: function (pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
		onAfterMega: function (pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 7] STABmons",
		desc: [
			"Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587949/\">STABmons</a>",
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', 'Ignore STAB Moves'],
		banlist: ['Kartana', 'Komala', 'Kyurem-Black', 'Silvally', 'Tapu Koko', 'Tapu Lele', 'Aerodactylite', 'King\'s Rock', 'Metagrossite', 'Razor Fang'],
		noLearn: ['Acupressure', 'Belly Drum', 'Chatter', 'Geomancy', 'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Thousand Arrows'],
	},
	{
		name: "[Gen 7] 2v2 Doubles",
		desc: [
			"Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3606989/\">2v2 Doubles</a>",
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['Gen 7] Doubles OU'],
		banlist: ['Tapu Lele', 'Focus Sash', 'Perish Song'],
	},
	{
		name: "[Gen 6] Gen-NEXT OU",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 3,
	},
	{
		name: "[Gen 6] Battle Factory",

		mod: 'gen6',
		team: 'randomFactory',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] BSS Factory",
		desc: [
			"Randomised 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Spot Singles.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3604845/\">Information and Suggestions Thread</a>",
		],

		mod: 'gen7',
		team: 'randomBSSFactory',
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
	},
	{
		name: "[Gen 7] Monotype Random Battle",

		mod: 'gen7',
		team: 'random',
		searchShow: false,
		ruleset: ['Pokemon', 'Same Type Clause', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Challenge Cup 1v1",

		mod: 'gen7',
		team: 'randomCC',
		teamLength: {
			battle: 1,
		},
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] Challenge Cup 2v2",

		mod: 'gen7',
		team: 'randomCC',
		gameType: 'doubles',
		teamLength: {
			battle: 2,
		},
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] Hackmons Cup",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item."],

		mod: 'gen7',
		team: 'randomHC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Doubles Hackmons Cup",

		mod: 'gen7',
		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] Random Battle",

		mod: 'gen6',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 5] Random Battle",

		mod: 'gen5',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] Random Battle",

		mod: 'gen4',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Random Battle",

		mod: 'gen3',
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Random Battle",

		mod: 'gen2',
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 1] Random Battle",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 1] Challenge Cup",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},

	// RoA Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "RoA Spotlight",
		column: 4,
	},
	{
		name: "[Gen 2] UU",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/3576710/\">GSC UU Discussion</a>"],

		mod: 'gen2',
		ruleset: ['[Gen 2] OU'],
		banlist: ['OU', 'BL'],
	},
	{
		name: "[Gen 5] RU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3473124/\">BW2 RU Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		// searchShow: false,
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning'],
	},
	{
		name: "[Gen 1] STABmons",
		desc: [
			"Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3587949/\">STABmons</a>",
		],

		mod: 'gen1',
		ruleset: ['[Gen 1] OU', 'Ignore STAB Moves'],
		banlist: [],
	},

	// Past Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens OU",
		column: 4,
	},
	{
		name: "[Gen 6] OU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/dex/xy/tags/ou/\">ORAS OU Banlist</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3596900/\">ORAS OU Viability Rankings</a>",
		],

		mod: 'gen6',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew'],
	},
	{
		name: "[Gen 5] OU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3599678/\">BW2 OU Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
	},
	{
		name: "[Gen 4] OU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3506147/\">DPP OU Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
		],

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 3] OU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
		],

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 2] OU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3556533/\">GSC OU Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] OU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3572352/\">RBY OU Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},

	// OR/AS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Singles",
		column: 4,
	},
	{
		name: "[Gen 6] Ubers",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3522911/\">ORAS Ubers</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3535106/\">ORAS Ubers Viability Rankings</a>",
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] UU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/dex/xy/tags/uu/\">ORAS UU Banlist</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3598164/\">ORAS UU Viability Rankings</a>",
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought', 'Baton Pass'],
	},
	{
		name: "[Gen 6] RU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/dex/xy/tags/ru/\">ORAS RU Banlist</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3574583/\">ORAS RU Viability Rankings</a>",
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] UU'],
		banlist: ['UU', 'BL2'],
	},
	{
		name: "[Gen 6] NU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/dex/xy/tags/nu/\">ORAS NU Banlist</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3555650/\">ORAS NU Viability Rankings</a>",
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] RU'],
		banlist: ['RU', 'BL3'],
	},
	{
		name: "[Gen 6] PU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/dex/xy/tags/pu/\">ORAS PU Banlist</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3528743/\">ORAS PU Viability Rankings</a>",
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] NU'],
		banlist: ['NU', 'BL4', 'Chatter'],
		unbanlist: ['Baton Pass'],
	},
	{
		name: "[Gen 6] LC",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/dex/xy/formats/lc/\">ORAS LC Banlist</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3547566/\">ORAS LC Viability Rankings</a>",
		],

		mod: 'gen6',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger'],
	},
	{
		name: "[Gen 6] Monotype",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/posts/7421332/\">ORAS Monotype</a>"],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: [
			'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Charizard-Mega-X', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Greninja', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Mawile-Mega', 'Metagross-Mega',
			'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye-Mega', 'Salamence-Mega', 'Shaymin-Sky', 'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Smooth Rock', 'Soul Dew',
		],
	},
	{
		name: "[Gen 6] Anything Goes",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3523229/\">ORAS Anything Goes</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3548945/\">ORAS AG Resources</a>",
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "[Gen 6] CAP",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3537407/\">ORAS CAP Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3545628/\">ORAS CAP Viability Rankings</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/5594694/\">ORAS CAP Sample Teams</a>",
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU', 'Allow CAP'],
	},
	{
		name: "[Gen 6] Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3527960/\">ORAS Battle Spot Singles</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3554616/\">ORAS BSS Viability Rankings</a>",
		],

		mod: 'gen6',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// OR/AS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Doubles/Triples",
	},
	{
		name: "[Gen 6] Doubles OU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3498688/\">ORAS Doubles OU Banlist</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3535930/\">ORAS Doubles OU Viability Rankings</a>",
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard Doubles', 'Swagger Clause', 'Team Preview'],
		banlist: [
			'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
			'Soul Dew', 'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder',
		],
	},
	{
		name: "[Gen 6] VGC 2016",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3558332/\">VGC 2016 Rules</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3580592/\">VGC 2016 Viability Rankings</a>",
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Illegal', 'Unreleased', 'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Phione', 'Manaphy', 'Darkrai',
			'Shaymin', 'Shaymin-Sky', 'Arceus', 'Victini', 'Keldeo', 'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Hoopa-Unbound', 'Volcanion', 'Soul Dew',
		],
		requirePentagon: true,
		onValidateTeam: function (team) {
			const legends = ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde'];
			let n = 0;
			for (const set of team) {
				let baseSpecies = this.getTemplate(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 2) return ["You can only use up to two legendary Pok\u00E9mon."];
			}
		},
	},
	{
		name: "[Gen 6] Battle Spot Doubles",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3560820/\">ORAS Battle Spot Doubles Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3560824/\">ORAS BSD Viability Rankings</a>",
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] Battle Spot Triples",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3533914/\">ORAS Battle Spot Triples Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3549201/\">ORAS BST Viability Rankings</a>",
		],

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6],
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		requirePentagon: true,
	},
	{
		name: "[Gen 6] Triples Custom Game",

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// B2/W2 Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "B2/W2 Singles",
		column: 5,
	},
	{
		name: "[Gen 5] Ubers",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3550881/\">BW2 Ubers Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6446463/\">BW2 Ubers Sample Teams</a>",
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
	},
	{
		name: "[Gen 5] UU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3474024/\">BW2 UU Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning'],
	},
	{
		name: "[Gen 5] NU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3484121/\">BW2 NU Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist'],
	},
	{
		name: "[Gen 5] LC",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3485860/\">BW2 LC Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela'],
	},
	{
		name: "[Gen 5] GBU Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Custom Game",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// B2/W2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: 'B2/W2 Doubles',
		column: 5,
	},
	{
		name: "[Gen 5] Doubles OU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3533424/\">BW2 Doubles Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3533421/\">BW2 Doubles Viability Ranking</a>",
		],

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Swagger Clause', 'Team Preview'],
		banlist: [
			'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Jirachi',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Zekrom', 'Soul Dew', 'Dark Void', 'Sky Drop',
		],
	},
	{
		name: "[Gen 5] GBU Doubles",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// DPP Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Singles",
		column: 5,
	},
	{
		name: "[Gen 4] Ubers",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/7433831/\">DPP Ubers Information &amp; Resources</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3505128/\">DPP Ubers Viability Ranking</a>",
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus'],
	},
	{
		name: "[Gen 4] UU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3532624/\">DPP UU Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3503638/\">DPP UU Viability Ranking</a>",
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL'],
	},
	{
		name: "[Gen 4] NU",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3583742/\">DPP NU Metagame Discussion</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/3512254/\">DPP NU Viability Ranking</a>",
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL', 'UU', 'BL2'],
	},
	{
		name: "[Gen 4] LC",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/dp/articles/little_cup_guide\">DPP LC Guide</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/7336500/\">DPP LC Viability Ranking</a>",
		],

		mod: 'gen4',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['LC Uber', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma', 'Berry Juice', 'Deep Sea Tooth', 'Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 4] Custom Game",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// DPP Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Doubles",
		column: 5,
	},
	{
		name: "[Gen 4] Doubles OU",
		desc: ["&bullet; <a href=\"http://www.smogon.com/forums/threads/3618411/\">DPP Doubles</a>"],

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 4] OU'],
		banlist: ['Explosion', 'Soul Dew'],
		unbanlist: ['Garchomp', 'Latias', 'Latios', 'Manaphy', 'Mew', 'Salamence', 'Wobbuffet', 'Wynaut'],
	},
	{
		name: "[Gen 4] Doubles Custom Game",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Generations",
		column: 5,
	},
	{
		name: "[Gen 3] Ubers",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/7433832/\">ADV Ubers Information &amp; Resources</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3536426/\">ADV Ubers Viability Ranking</a>",
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers'],
	},
	{
		name: "[Gen 3] Custom Game",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Doubles Custom Game",

		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] Ubers",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/7433879/\">GSC Ubers Information &amp; Resources</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Ubers",
		desc: [
			"&bullet; <a href=\"http://www.smogon.com/forums/threads/3541329/\">RBY Ubers Viability Ranking</a>",
			"&bullet; <a href=\"http://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 1] OU (tradeback)",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Allow Tradeback', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Uber', 'Unreleased', 'Illegal',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Stadium",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Custom Game",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
];
