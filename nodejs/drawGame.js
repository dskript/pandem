
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
    if (!image.complete){
      setTimeout(function(){
        drawMap(ctx, image);
      }, 50);
      return;
    }
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	//put city and connecting lines on the map after map image is louaded
	drawConnection()
	drawCity()
	cardDeck('inf','deck', 'INFdeck', 1)
	cardDeck('pl','deck', 'PLAYdeck', 50)
}

    // Create a new image object
    var image = new Image();
    // Set the image source and start loading
    image.src = './Planet_Earth_D_crop.png';
    drawMap(ctx, image);


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
function drawPlayer(imageSource, position){
    var image = new Image();
	let x = position.x - 10
	let y = position.y - 20
	image.src = imageSource;
	
	if (!image.complete){
		setTimeout(function(){
			drawPlayer(imageSource, position);
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
function showHand(player){
	let x = document.getElementById("hand")
	x.innerHTML = infectionDeck.join(", ")

}

//mouse position, helper function to get x&y coords

	function writeMessage(canvas, message) {
	// var context = canvas.getContext('2d');
	// // ctx.clearRect(0, 0, canvas.width, canvas.height);
	// ctx.font = '18pt Calibri';
	// ctx.fillStyle = 'black';
	// ctx.fillText(message, 10, 25);
	console.log(message)
	}
	function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
	}
	//   var canvas = document.getElementById('canvas');
	//   var ctx = canvas.getctx('2d');

	canvas.addEventListener('mousemove', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
	writeMessage(canvas, message);
	}, false);



