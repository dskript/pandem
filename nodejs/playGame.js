//picks up a card from infection deck
function drawINFcard(drawDeck, usedDeck){
	usedDeck.unshift(drawDeck.shift())
	let x = document.getElementById("card")
	x.innerHTML = cities[usedDeck[0]].name
	//updates numbers of cards in Game state
	state.numOfCards = infectionDeck.length
	var parent = document.getElementsByClassName("cardSpace")
	var child = document.getElementById("r");
	// game ends when Infection deck has 2 cards left
	if(infectionDeck.length <= 2){
		parent[0].removeChild(child)
		console.log("Game Over",infectionDeck.length)
		return
	} else if(infectionDeck.length <= 5){
			parent[0].removeChild(child)
			console.log(infectionDeck.length)
		}
	//infects city based on picked up card
	infect(usedDeck[0])
	// infect('Paris')
}


//infects city by with native disease. 
function infect(INFcity){
	let setX = 0 
	let setY = 0
	let INFstateCount = cities[INFcity].INFstate.red + cities[INFcity].INFstate.cyan + cities[INFcity].INFstate.yellow + cities[INFcity].INFstate.black
	if (INFstateCount === 1){
		setX = 9, setY = - 16 	
	}
	if (INFstateCount === 2){
		setX = - 9, setY = - 16 	
	}
	//checks for outbreak
	if (INFstateCount === 3){
		console.log('outbreak + chain reaction!')
	}
		let color = cities[INFcity].color
		let x = setX + cities[INFcity].position.x
		let y = setY + cities[INFcity].position.y
		ctx.fillStyle = color
		ctx.strokeStyle = 'white'
		ctx.beginPath();
		ctx.arc(x, y +12, 5, 0, Math.PI * 2);
		ctx.fill()
		ctx.stroke();
		//updates state with infected city name and disease color
		cities[INFcity].INFstate[color]++
		//updates total color per disease color
		state[color]++
		return 
	}	


//returns city disease count from Game state
function isOutbreak(cityName){
	let diseaseCount = state.city[cityName].length
	let colorCount = Object.values(state.city).flat()

	console.log(state.red)
	// console.log(state.city[cityName])
	return diseaseCount
}

function countINF(){
	console.log(Object.values(state))
}