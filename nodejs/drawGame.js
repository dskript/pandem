
let infectionDeck = ['Bangkok','San Francisco', 'Hong Kong', 'Paris', 'New York'];
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


function showDeck(deck){
			let x = document.getElementById("myPara")
			x.innerHTML = deck.join(", ")
		}


function showShuffleDeck(deck){
	shuffle(deck)
	let x = document.getElementById("myPara")
			x.innerHTML = deck.join(", ")
}


function drawCard(drawDeck, usedDeck){
	console.log(state.numOfCards-1)

	usedDeck.unshift(drawDeck.shift())
	let x = document.getElementById("card")
	x.innerHTML = usedDeck[0]
	//updates numbers of cards in Game state
	state.numOfCards = infectionDeck.length
	//
	var parent = document.getElementsByClassName("cardSpace")
	var child = document.getElementById("r");
	console.log(parent[0].removeChild(child))


}







//canvas width/height set to css style & 2d space
let canvas = document.getElementById('canvas')
canvas.width = canvas.scrollWidth
canvas.height = canvas.scrollHeight
let ctx = canvas.getContext('2d')



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



	//draw city location on the image map
let cityCord = [[654,336,'Bankok'],[45, 249, 'SF'],[381,209, 'Paris'], [695, 305,'Hong Kong'], [180,243,'NY']]

function drawCity(){
	cityCord.forEach(function(city){
		for (let i in city){
		ctx.fillStyle = 'red' 
		ctx.beginPath();
		ctx.arc(city[0], city[1], 5, 0, Math.PI * 2);
		ctx.fill();
			}
		}
	)
}


//mouse position

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