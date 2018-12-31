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




// var newDiv = document.createElement('div');
//    // newDiv.id = 'r2';
//    newDiv.className = 'cardBack';
// // console.log(document.getElementsByClassName("cardSpace"))
// // var element = document.getElementById("myPara")
// var element = document.getElementsByClassName("cardSpace")
// // console.log(element[0])
// 	element[0].appendChild(newDiv);
// console.log(document.getElementsByClassName("cardSpace"))
let x = document.getElementsByTagName("div")
// console.log(x)



// var element = document.getElementsByClassName("cardBack")
// console.log(element)

// function init(){
// 	var elem = document.getElementById("card1")
// console.log(elem)
// }

// init();
