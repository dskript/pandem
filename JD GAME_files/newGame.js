let infectionDeck = ['ny', 'bangkok', 'sf', 'hongkong', 'paris', 'santiago', 'lima', 'bogota', 'saopaulo',
'buenosaires', 'mexicocity', 'miami', 'la','atlanta','chicago','wdc','montreal'
];
let usedInfDeck = []

let playDeck = ['event1', 'event2', 'event3', 'event4', 'event5','ny', 'bangkok', 'sf', 'hongkong', 'paris', 'santiago', 'lima', 'bogota', 'saopaulo',
'buenosaires', 'mexicocity', 'miami', 'la','atlanta','chicago','wdc','montreal'
];
let usedPlayDeck = []



	
//Start new game, shuffles everything in the game
function newGame(){
	setUpPlayersDifficulty()
	shuffle(infectionDeck)
	rolesArr = Object.keys(roles)
	shuffle(rolesArr)
	shuffle(playDeck)

	//draw research station in Atlanta
	drawResearchStation('atlanta')

	//assigns role & draw player
	for (let i = 1; i <= state.totalPlayers; i++){
		state.Player[i] = new Player(roles[rolesArr.shift()])
		console.log(state.Player)
	}
	// players.player1.role = roles[rolesArr.shift()]
	// rolePawn = players.player1.role
	// drawPlayer(rolePawn.image, players.player1.position)

	//deal cards from Player deck accoridng to the total number of players
		let playersNum  = state.totalPlayers
		
		let playCards = 0
		switch (playersNum){
			
			case 2:
			playCards = 4;
			break;
			case 3:
			playCards = 3;
			break;
			case 4:
			playCards = 2;
			break;
			
		}
		while(playCards > 0){
			playCards --
		dealPLAYcard()
		}
	//display player's hand
		showHand('player1')
	//infect cities: 3 cards - 3 INF per city, 3 cards - 2 INF per city, 3 cards - 1 INF per city
		infectOnStart(3,2)
		infectOnStart(3,1)
		infectOnStart(3,0)
	}
//opens input window for user to set number of players in the game	
function setUpPlayersDifficulty(){
let input = 0
	do{
		 input = prompt("Enter number of players (2-4)");
	}while(input == null || input == "" || input <=1 || input > 4);
	state.totalPlayers = Number(input)
	// console.log(state.totalPlayers)
	//auto-set difficult level to Introductory
}

function infectOnStart(CardNum, INFnum){
	if (CardNum === 0){
		return 0
	}
	let INFcity = drawINFcard()
	let cardCount = CardNum - 1
	let infCount = INFnum
		while(infCount>0){
			infCount --
			infect(INFcity)
		}
		infectOnStart(cardCount, INFnum)
}


/**
 * Shuffles deck
 */

function shuffle(a) {

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}
// console.log(players.player1)


// prints unshuffled/shuffled deck
function showDeck(deck){
			let x = document.getElementById("myPara")
			x.innerHTML = deck.join(", ")
			// console.log(infectionDeck)
		}
function showShuffleDeck(){
	shuffle(infectionDeck)
	let x = document.getElementById("myPara")
			x.innerHTML = infectionDeck.join(", ")
}

