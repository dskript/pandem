//picks up a card from infection deck
function drawINFcard(){
	usedInfDeck.unshift(infectionDeck.shift())
	let x = document.getElementById("card")
	x.innerHTML = cities[usedInfDeck[0]].name
	//updates numbers of cards in Game state
	state.numOfCards = infectionDeck.length
	var parent = document.getElementsByClassName("INFdeck")
	var child = document.getElementById("inf");
	// game ends when Infection deck has 2 cards left
	if(infectionDeck.length <= 5){
		parent[0].removeChild(child)
		console.log(infectionDeck.length)
		}
    //infects city based on picked up card
    infect(usedInfDeck[0])
    // console.log(usedInfDeck)
    return usedInfDeck[0]
    
}


//picks up a card from player deck
function dealPLAYcard(activePlayer){
	// let turn = state.turn
    // let activePlayer = state
    usedPlayDeck.unshift(playDeck.shift())
	let x = document.getElementById("playcard")
    x.innerHTML = playcards[usedPlayDeck[0]].name
    
	//add card to players hand
	//   console.log(activePlayer)
    activePlayer.hand.push(playcards[usedPlayDeck[0]])
    // console.log(activePlayer.hand)

    // game ends when Player deck has 2 cards left
	var parent = document.getElementsByClassName("PLAYdeck")
    var child = document.getElementById("pl");
	if(playDeck.length <= 2){
		parent[0].removeChild(child)
		console.log("Game Over",playDeck.length)
		return
	}else if(playDeck.length <= 5){
			parent[0].removeChild(child)
			console.log(playDeck.length)
    }
    // check number of cards in player's hand before ending the turn    
    let cardCount = activePlayer.hand.length   
        return cardCount
}
	


//returns city disease count from Game state
function isOutbreak(cityName){
	let diseaseCount = state.city[cityName].length
	// let colorCount = Object.values(state.city).flat()

	console.log(state.red)
	// console.log(state.city[cityName])
	return diseaseCount
}

// function countINF(){
// 	console.log(Object.values(state))
// }

//pressing 1 displayes which cities player can drive/Ferry to

const node = document.getElementsByClassName("toprow")[0];
// console.log(node)
node.addEventListener("keydown", function(event) {
    if (event.key === "1") {
		event.preventDefault();
		let text = "<br> You can Drive/Ferry to " + checkDriveTo()
		showTurnSatus(text)

		
        // Do more work
	}
	
});

function checkDriveTo(){
	// debugger

	let destinations = currentPlayer.position.connections
	//acivates relocatePlayer function with current player and array of cities where player can drive/ferry 
	// relocatePlayer(currentPlayer)
	return destinations
}