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

}

function showGS(){
	let x = document.getElementById("myPara2")
			x.innerHTML = state.numOfCards
}
