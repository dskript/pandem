
let infectionDeck = ['Bangkok','San Francisco', 'Bangkok', 'Bangkok', 'Hong Kong', 'Paris', 'New York'];
let usedInfDeck = []


for(var i=0; i < 5; i++){
	var newDiv = document.createElement('div');
	   newDiv.id = 'r';
	   newDiv.className = 'deck';
	   newDiv.style = `top:${(i*2)}px; left:${(i*2)}px; z-index: ${-(i+10)};`

	var element = document.getElementsByClassName("cardSpace")
	   element[0].appendChild(newDiv);

	}
let x = document.getElementsByTagName("div")	


/**
 * Shuffles array in place. ES6 version
 */
function shuffle(a) {

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

//prints unshuffled/shuffled deck
function showDeck(deck){
			let x = document.getElementById("myPara")
			x.innerHTML = deck.join(", ")
		}
function showShuffleDeck(deck){
	shuffle(deck)
	let x = document.getElementById("myPara")
			x.innerHTML = deck.join(", ")
}

//draws card from infection deck
function drawINFcard(drawDeck, usedDeck){
	usedDeck.unshift(drawDeck.shift())
	let x = document.getElementById("card")
	x.innerHTML = usedDeck[0]
	//updates numbers of cards in Game state
	state.numOfCards = infectionDeck.length
	var parent = document.getElementsByClassName("cardSpace")
	var child = document.getElementById("r");
	parent[0].removeChild(child)
	//infect city
	infect(usedDeck[0])

}


//loads canvas and sets its width/height to css style + 2d space
let canvas = document.getElementById('canvas')
canvas.width = canvas.scrollWidth
canvas.height = canvas.scrollHeight
let ctx = canvas.getContext('2d')


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
    drawCity()
}

    // Create a new image object
    var image = new Image();
    // Set the image source and start loading
    image.src = './Planet_Earth_D_crop.png';
    drawMap(ctx, image);



//draw city location as color dot on the map. color corresponds to deseases that are native to each city
let cityCord = [[654,336,'Bangkok','red'],[45, 249, 'San Francisco', 'cyan'],
[381,209, 'Paris', 'cyan'], [695, 305,'Hong Kong','red'], [180,243,'New York','cyan']]

function drawCity(){
	cityCord.forEach(function(city){

		ctx.fillStyle = city[3] 
		ctx.beginPath();
		ctx.arc(city[0], city[1], 8, 0, Math.PI * 2);
		ctx.fill();
			
		}
	)
}

//infects city by 1 native disease. 

function infect(newINFcity){
	if (isOutbreak(newINFcity) === 1){
		console.log('hi')
		offsetX = 5, offsetY = 5
		
	}
	cityCord.forEach(function(city, offsetX, offsetY){
		let cityName = city[2]
		let diseaseColor = city[3]
		let x = offsetX + city[1]
			if(newINFcity === cityName){
				ctx.fillStyle = diseaseColor
				ctx.strokeStyle = 'white'
				ctx.beginPath();
				ctx.arc(city[0], x +12, 7, 0, Math.PI * 2);
				ctx.fill()
				ctx.stroke();
				//updates GS with infected city and disease color
				state.city[cityName].push(diseaseColor)
				isOutbreak(cityName)
				console.log(state.city)
				return 
			}	
		})
}

//returns city disease count from Game state
function isOutbreak(cityName){
	let diseaseCount = state.city[cityName].length
	// console.log(state.city[cityName])
	return diseaseCount
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



