let infectionDeck = ['ny', 'ny','ny','bangkok', 'sf', 'hongkong', 'paris', 'santiago', 'lima', 'bogota', 'saopaulo',
'buenosaires', 'mexicocity', 'miami', 'la','atlanta','chicago','wdc','montreal'
];
let usedInfDeck = []

let playDeck = ['event1', 'event2', 'event3', 'event4', 'event5','ny', 'bangkok', 'sf', 'hongkong', 'paris', 'santiago', 'lima', 'bogota', 'saopaulo',
];
let usedPlayDeck = []



	
//Start new game, shuffles everything in the game
function newGame(){
	shuffle(infectionDeck)
	rolesArr = Object.keys(roles)
	shuffle(rolesArr)
	shuffle(playDeck)

	//assigns role with role actions & draw pawn
	players.player1.role = roles[rolesArr.shift()]
	// roles[rolesArr.shift()]
	rolePawn = players.player1.role
	drawPlayer(rolePawn.image, players.player1.position)
	
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
		drawPLAYcard()
		}
	//infect cities: 3 cards - 3 INF per city, 3 cards - 2 INF per city, 3 cards - 1 INF per city
		infectOnStart(3,2)
		infectOnStart(3,1)
		infectOnStart(3,0)
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
function showDeck(){
			let x = document.getElementById("myPara")
			x.innerHTML = infectionDeck.join(", ")
		}
function showShuffleDeck(){
	shuffle(infectionDeck)
	let x = document.getElementById("myPara")
			x.innerHTML = infectionDeck.join(", ")
}

