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
// console.log(players.player1)