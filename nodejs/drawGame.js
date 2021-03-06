//creates 5card depth to INF & PLAY decks
function cardDeck(id, className, elementName, num){
	for(var i=0; i < 5; i++){
		var newDiv = document.createElement('div');
		newDiv.id = id;
		newDiv.className = className;
		// newDiv.style = `order: ${(i)}; z-index: ${-(i+10)};`
		newDiv.style = `top:${(i)}%; left:${(i+num)}%; z-index: ${-(i+10)};`

		var element = document.getElementsByClassName(elementName)
		element[0].appendChild(newDiv);
		}
	let x = document.getElementsByTagName("div")	
}
//draws two decks 
cardDeck('inf','deck', 'INFdeck', 1)
cardDeck('pl','deck', 'PLAYdeck', 1)


//loads canvas and sets its width/height to css style + 2d space
let canvas = document.getElementById('canvas')
canvas.width = 1250
canvas.height = 750
// canvas.width = canvas.scrollWidth
// canvas.height = canvas.scrollHeight
let ctx = canvas.getContext('2d')


//window.max, window resize event, debonce limit to xtimes per second

//loads map image into canvas
function drawMap(ctx, image){
    // If the image is not ready, wait and try again in 
    // approx 50 milliseconds
    if (!imageMap.complete){
      setTimeout(function(){
        drawMap(ctx, imageMap);
      }, 50);
      return;
    }
	ctx.drawImage(imageMap, 0, 0, canvas.width, canvas.height);
	//put city and connecting lines on the map after map image is louaded
	drawConnection()
	drawCity()

}

    // Create a new image object
    var imageMap = new Image();
    // Set the image source and start loading
    imageMap.src = './Planet_Earth_D_crop.png';
    drawMap(ctx, imageMap);



//draw city location as color dot on the map. color corresponds to deseases that are native to each city
function drawCity(){
	for (let k in cities){
		let city = cities[k]
		ctx.fillStyle = 'black'
		// ctx.fillStroke = "black"
		ctx.font = "16px Arial";
		ctx.fillText(city.name, city.position.x-10, city.position.y-10);
		ctx.fillStyle = city.color 
		ctx.beginPath();
		ctx.arc(city.position.x, city.position.y, 8, 0, Math.PI * 2);
		ctx.fill();	
	}
}

//draw direct connection lines between cities
function drawConnection(){
	for (let startCity in cities){
		xStart = cities[startCity].position.x
		yStart = cities[startCity].position.y
		for(let endCity of cities[startCity].connections){
			xEnd = cities[endCity].position.x
			yEnd = cities[endCity].position.y	
				ctx.beginPath();
				ctx.lineWidth = "1";
				ctx.strokeStyle = 'white'
				ctx.moveTo(xStart, yStart);
				ctx.lineTo(xEnd, yEnd);
				ctx.stroke();
			}			
		}
	}
	
//draws player pawn based on the role
function drawPlayer(player){
	var image = new Image();
	
	let x = player.position.position.x - 10 + drawPlayerInSameCity(player)
	let y = player.position.position.y - 35
	image.src = player.role.image
	ctx.save();

	if (!image.complete){
		setTimeout(function(){
			drawPlayer(player);
		}, 50);
		return;
	  }
ctx.drawImage(image, x, y, 20, 30);

}

//infects city with native disease. 
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
		//updates total count per disease color
		state[color]++
		return 
	}	



function drawResearchStation(cityName){
		// console.log
		var image = new Image();
		let x = cities[cityName].position.x - 15
		let y = cities[cityName].position.y - 35
		image.src = './research_station.png'
		
		if (!image.complete){
			setTimeout(function(){
				drawResearchStation(cityName);
			}, 50);
			return;
		}	

	
ctx.drawImage(image, x, y, 30, 24);
}	

//display players hands and roles
function showHand(player){
	let x = document.getElementById("hand"+player.turnOrder)
	// console.log(x)
	let text = "<b>" + player.role.name + "<br> Your Hand:</b>"
	// console.log(player)s
	for(let i = 0; i < player.hand.length; i++){
		// console.log(state.players)
	text = text + player.hand[i].name + ", "
	}
	text = text.slice(0, -2)
	x.innerHTML = text
	
	
}

function showTurnSatus(destination){
	let x = document.getElementById('turnStatus')
	// console.log(x)
	let player = checkTurn()

	let text = player.role.name + "<br> # of Actions: " + state.actions 
	if( destination !== undefined){
		text = text + destination
	}
	
	x.innerHTML = text
}

function showHandButton() {
	var x = document.getElementsByClassName("player");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

//mouse position, helper function to get x&y coords


	function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
	}
	//   var canvas = document.getElementById('canvas');
	//   var ctx = canvas.getctx('2d');

	canvas.addEventListener('mousedown', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
	console.log(message)
	}, false);



	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
		}


	//"drives" player pawn to adjecent city if destination Array matches the click of the user
		canvas.addEventListener('mousedown', function(evt) {
			var mousePos = getMousePos(canvas, evt);
			let cityName = ""
			for(let city in cities){
				if(mousePos.x >= cities[city].position.x - 8 && mousePos.x <= cities[city].position.x + 8 &&
					mousePos.y >= cities[city].position.y - 8 && mousePos.y <= cities[city].position.y + 8 )
					{
						cityName = city
						}
					}
		let currentPlayer = checkTurn()
		let destinationArr = currentPlayer.position.connections
			if (destinationArr.includes(cityName.toString()))	{
				console.log('moving player')
				ctx.clearRect(0, 0, canvas.width, canvas.height)
				currentPlayer.position = cities[cityName]
				state.actions --
				drawPlayer(currentPlayer)
				redrawCanvas()
				}	
			}, false);


	function redrawCanvas(){
		// debugger
		//map, cities & connection
		drawMap(ctx, imageMap)
		//player pawn
		for (let i = 1; i <= state.totalPlayers; i++){
			drawPlayer(state.players[i])
		}


		state.researchSt.forEach(drawResearchStation(element))
		
	}

