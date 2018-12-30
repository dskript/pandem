
let infectionDeck = ['Bangkok','San Francisco', 'Hong Kong', 'Paris'];
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
	// for(let i = 0; i < num; i++ ){
		usedDeck.unshift(drawDeck.shift())
		let x = document.getElementById("card")
		x.innerHTML = usedDeck[0]

}



