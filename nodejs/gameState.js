let state = {
	numOfCards: infectionDeck.length,
	city:{
		'Bangkok':[],
		'San Francisco':[], 
		'Hong Kong':[], 
		'Paris':[], 
		'New York':[]
	},
	red: 0,
	cyan: 0,
	black: 0,
	yellow: 0,

}




function showGS(){
	let x = document.getElementById("myPara2")
			x.innerHTML = state.numOfCards
}

//alex

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
	//   let connect = [
	// 	['Santiago','Lima'],['Lima','Bogota'],['Lima','Mexico City'],
	// 	['Bogota','Buenos Aires'],['Bogota','Sao Paulo'],['Bogota','Miami'],
	// 	['Mexico City','Miami'],['Mexico City','Los Angeles'],
	// 	['Los Angeles','Sydney'],['Los Angeles','San Francisco'],
	// 	['San Francisco','Chicago'],['San Francisco','Manila'],['San Francisco','Tokyo'],
	// 	['Miami','Atlanta'],['Miami','Washington'],
	// 	['Washington','Atlanta'],['Washington','Montreal'],['Washington','New York'],
	// 	['Atlanta','Chicago'],['Chicago','Montreal'],['Montreal','New York'],
	// ]
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

  function position(x, y){
	this.x = x,
	this.y = y
  }

//   console.log(cities.newyork.position.x)

  