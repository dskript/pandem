let state = {
	numOfCards: infectionDeck.length,
	city:{
		'Bangkok':[],
		'San Francisco':[], 
		'Hong Kong':[], 
		'Paris':[], 
		'New York':[]
	},

}

function showGS(){
	let x = document.getElementById("myPara2")
			x.innerHTML = state.numOfCards
}
