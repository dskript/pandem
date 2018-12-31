
let infectionDeck = ['Bangkok','San Francisco', 'Hong Kong', 'Paris', 'New York'];
let usedInfDeck = []

// console.log(cars)

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}


function showDeck(deck){
			let x = document.getElementById("myPara")
			x.innerHTML = deck.join(", ")
		}


function showShuffleDeck(deck){
	shuffle(deck)
	let x = document.getElementById("myPara")
			x.innerHTML = deck.join(", ")
}


function drawCard(drawDeck, usedDeck){
	console.log(state.numOfCards-1)

	usedDeck.unshift(drawDeck.shift())
	let x = document.getElementById("card")
	x.innerHTML = usedDeck[0]
	//updates numbers of cards in Game state
	state.numOfCards = infectionDeck.length
	//
	var parent = document.getElementsByClassName("cardSpace")
	// / console.log(child)
	var child = document.getElementById("r");
	// console.log(child)
	console.log(parent[0].removeChild(child))


}



