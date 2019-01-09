let infectionDeck = ['ny', 'bangkok', 'sf', 'hongkong', 'paris', 'santiago', 'lima', 'bogota', 'saopaulo',
'buenosaires', 'mexicocity', 'miami', 'la','atlanta','chicago','wdc','montreal'
];
let usedInfDeck = []

let playDeck = ['ny', 'bangkok', 'sf', 'hongkong', 'paris', 'santiago', 'lima', 'bogota', 'saopaulo',
'buenosaires', 'mexicocity', 'miami', 'la','atlanta','chicago','wdc','montreal'
];
let usedPlayDeck = []


//Start new game, shuffles everything in the game

function newGame(){
	shuffle(infectionDeck)
	rolesArr = Object.keys(roles)
	shuffle(rolesArr)

	//assigns role with role actions
	players.player1.role = roles[rolesArr.shift()]
	// roles[rolesArr.shift()]
	rolePawn = players.player1.role
	
	drawPlayer(rolePawn.image, players.player1.position)
	
	// console.log(rolesArr)
	console.log(rolePawn.image, players.player1.position)
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


//prints unshuffled/shuffled deck
// function showDeck(){
// 			let x = document.getElementById("myPara")
// 			x.innerHTML = infectionDeck.join(", ")
// 		}
// function showShuffleDeck(){
// 	shuffle(infectionDeck)
// 	let x = document.getElementById("myPara")
// 			x.innerHTML = infectionDeck.join(", ")
// }

