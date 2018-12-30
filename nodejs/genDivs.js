// var toAdd = document.createDocumentFragment();

for(var i=0; i < 11; i++){
var newDiv = document.createElement('div');
   newDiv.id = 'r'+i;
   newDiv.className = 'deck';
   // newDiv.style = " position: relative;top: -10%;"

// console.log(document.getElementsByClassName("cardSpace"))
// var element = document.getElementById("myPara")
var element = document.getElementsByClassName("cardSpace")
// console.log(element[0])
	element[0].appendChild(newDiv);
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
