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
	newyork: {
	  name: 'New York',
	  position: new position(284,303),
	  color: 'cyan',
	  INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
	  connections:[
	  ]
	},
	sanfran: {
	  name: 'San Francisco',
	  position: new position(66,296),
	  color: 'cyan',
	  INFstate: { red: 0, cyan: 0, black: 0, yellow: 0},
	  connections: [
	  ]
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

  function position(x, y){
	this.x = x,
	this.y = y
  }

//   console.log(cities.newyork.position.x)

  