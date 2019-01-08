
let infectionDeck = ['ny', 'bangkok', 'sf', 'hongkong', 'paris', 'santiago', 'lima', 'bogota', 'saopaulo',
'buenosaires', 'mexicocity', 'miami', 'la','atlanta','chicago','wdc','montreal'
];
let usedInfDeck = []

//creates visiable depth to the card deck
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

//picks up a card from infection deck
function drawINFcard(drawDeck, usedDeck){
	usedDeck.unshift(drawDeck.shift())
	let x = document.getElementById("card")
	x.innerHTML = usedDeck[0]
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
	
}

    // Create a new image object
    var image = new Image();
    // Set the image source and start loading
    image.src = './Planet_Earth_D_crop.png';
    drawMap(ctx, image);


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


// countINF()




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



