
let infectionDeck = ['Bangkok','San Francisco', 'Hong Kong', 'Paris', 'New York'];
let usedInfDeck = []

// console.log(cars)

// var toAdd = document.createDocumentFragment();

for(var i=0; i < 5; i++){
	var newDiv = document.createElement('div');
	   newDiv.id = 'r';
	   newDiv.className = 'deck';
	   newDiv.style = `top:${(i*2)}px; left:${(i*2)}px; z-index: ${-(i+10)};`
	   // newDiv.style = `left:${2 + (i*2)}px;`
	
	var element = document.getElementsByClassName("cardSpace")
	// console.log(element[0])
	   element[0].appendChild(newDiv);
	//   console.log(document.getElementById("r0"))
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
	// / console.log(child)
	var child = document.getElementById("r");
	// console.log(child)
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


function drawCity(){
 
    ctx.fillStyle = 'black' 
    ctx.fillRect(10, 10, 100, 100) 
    ctx.fillStyle = 'green'
    ctx.fillRect(10, 10, 50, 50)
}


