let cities = {
	ny: {
		name: 'New York',
		position: new position(316,276),
		color: 'cyan',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections:['wdc','montreal']
	},
	sf: {
		name: 'San Francisco',
		position: new position(66,296),
		color: 'cyan',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['la','chicago'
		]
	},
	santiago: {
		name: 'Santiago',
		position: new position(264,608),
		color: 'yellow',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: [ 'lima', ]
		},
	lima: {
		name: 'Lima',
		position: new position(265,504),
		color: 'yellow',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['santiago','bogota','mexicocity']
		},
	bogota: {
		name: 'Bogota',
		position: new position(272,449),
		color: 'yellow',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['lima','mexicocity','miami','saopaulo','buenosaires']
		},
	saopaulo: {
		name: 'Sao Paulo',
		position: new position(396,561),
		color: 'yellow',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['bogota','buenosaires']
		},
	buenosaires: {
		name: 'Buenos Aires',
		position: new position(350,606),
		color: 'yellow',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['bogota','saopaulo']
		},
	mexicocity: {
		name: 'Mexico City',
		position: new position(167,391),
		color: 'yellow',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['lima','bogota','miami','chicago','la']
		},
		miami: {
		name: 'Miami',
		position: new position(252,371),
		color: 'yellow',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['bogota','mexicocity','atlanta','wdc']
		},
		la: {
		name: 'Los Angeles',
		position: new position(90,332),
		color: 'yellow',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['chicago','mexicocity','sf']
		},
		atlanta: {
		name: 'Atlanta',
		position: new position(233,331),
		color: 'cyan',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['miami','wdc','chicago']
		},
	chicago: {
		name: 'Chicago',
		position: new position(183,284),
		color: 'cyan',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['atlanta','montreal','sf','la','mexicocity']
		},  
		wdc: {
		name: 'Washington',
		position: new position(294,331),
		color: 'cyan',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['miami','atlanta','ny']
		},
		montreal: {
		name: 'Montreal',
		position: new position(251,276),
		color: 'cyan',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: ['chicago','atlanta','ny']
		},
	bangkok: {
		name: 'Bangkok',
		position: new position(1024,422),
		color: 'red',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: [
		]
	},
	paris: {
		name: 'Paris',
		position: new position(599,261),
		color: 'cyan',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: [
		]
	},
	hongkong: {
		name: 'Hong Kong',
		position: new position(1085,385),
		color: 'red',
		INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
		connections: [
		]
	},
}

let players = {
	player1: {
		role: 'no role',
		position: cities.atlanta.position,
		state: 'out of turn',
		actionCount: 4,
		hand: [],
		// action: drive() fly(),
		
	}
}


class Player {
	constructor(role){
		this.turn = 0
		this.role = role
		this.position = cities.atlanta.position
		// this.state: 'out of turn',
		// this.actionCount = 4,
		this.hand = []	
	}
}

let roles = {
	medic:{
		name:'Medic',
		image: './pawn/medic.png',
		},
	scientist:{
		name: 'Scientist',
		image: './pawn/scientist.png',
	},
	research:{
		name:'Researcher',
		image: './pawn/research.png',
	},
	qspec:{
		name:'Quarantine Specialist',
		image: './pawn/qspec.png',
	},
	opsx:{
		name:'Operations Expert',
		image: './pawn/opsx.png',
	},
	dispatch:{
		name:'Dispacther',
		image: './pawn/dispatch.png',
	},
	planner:{
		name:'Contingency Planner',
		image: './pawn/planner.png',
	}
	 }


let playcards = {
	ny: {
		name: 'New York',
		position: new position(316,276),
		color: 'cyan',
		connections:['wdc','montreal']
	},
	sf: {
		name: 'San Francisco',
		position: new position(66,296),
		color: 'cyan',
		connections: ['la','chicago'
		]
	},
	santiago: {
		name: 'Santiago',
		position: new position(264,608),
		color: 'yellow',
		connections: [ 'lima', ]
		},
	lima: {
		name: 'Lima',
		position: new position(265,504),
		color: 'yellow',
		connections: ['santiago','bogota','mexicocity']
		},
	bogota: {
		name: 'Bogota',
		position: new position(272,449),
		color: 'yellow',
		connections: ['lima','mexicocity','miami','saopaulo','buenosaires']
		},
	saopaulo: {
		name: 'Sao Paulo',
		position: new position(396,561),
		color: 'yellow',
		connections: ['bogota','buenosaires']
		},
	buenosaires: {
		name: 'Buenos Aires',
		position: new position(350,606),
		color: 'yellow',
		connections: ['bogota','saopaulo']
		},
	mexicocity: {
		name: 'Mexico City',
		position: new position(167,391),
		color: 'yellow',
		connections: ['lima','bogota','miami','chicago','la']
		},
		miami: {
		name: 'Miami',
		position: new position(252,371),
		color: 'yellow',
		connections: ['bogota','mexicocity','atlanta','wdc']
		},
		la: {
		name: 'Los Angeles',
		position: new position(90,332),
		color: 'yellow',
		connections: ['chicago','mexicocity','sf']
		},
		atlanta: {
		name: 'Atlanta',
		position: new position(233,331),
		color: 'cyan',
		connections: ['miami','wdc','chicago']
		},
	chicago: {
		name: 'Chicago',
		position: new position(183,284),
		color: 'cyan',
		connections: ['atlanta','montreal','sf','la','mexicocity']
		},  
		wdc: {
		name: 'Washington',
		position: new position(294,331),
		color: 'cyan',
		connections: ['miami','atlanta','ny']
		},
		montreal: {
		name: 'Montreal',
		position: new position(251,276),
		color: 'cyan',
		connections: ['chicago','atlanta','ny']
		},
	bangkok: {
		name: 'Bangkok',
		position: new position(1024,422),
		color: 'red',
		connections: [
		]
	},
	paris: {
		name: 'Paris',
		position: new position(599,261),
		color: 'cyan',
		connections: [
		]
	},
	hongkong: {
		name: 'Hong Kong',
		position: new position(1085,385),
		color: 'red',
		connections: [
		]
	},
	event1: {
		name: 'Forecast',
		action: "",
	},
	event2: {
		name: 'One Quiet Night',
		action: "",
	},
	event3: {
		name: 'Resilient Population',
		action: "",
	},
	event4: {
		name: 'Government Grant',
		action: "",
	},
	event5: {
		name: 'Airlift',
		action: "",
	},
}


// class position{
// 	constructor(x, y){
// 	this.x = x
// 	this.y = y
// 	}
// }

let state = {
	outbreakCount: 0,
	infRate: 2,
	red: 0,
	blue: 0,
	black: 0,
	yellow: 0,
	cureRed: "no cure",
	cureBlue: "no cure",
	cureYellow: "no cure",
	cureBlack: "no cure",
	totalPlayers: 0,
	Player:{},
	activePlayer: players.player1,
	difficulty: 'none',
}


function showGS(){
	let x = document.getElementById("myPara2")
			x.innerHTML = state.numOfCards
}

// function closeWindow(){
// 	window.close()
// }

//alex

//   console.log(cities.newyork.position.x)
