
// original console notification

//My cards
/*var cardOne = "queen";
var cardTwo  = "queen";
var cardThree = "king";
var cardFour = "king";*/
//matching queens
/*if (cardOne === cardTwo){
alert("You found a match");
}else {
	alert ("Sorry, try again");
}
//matching kings
if (cardThree ===cardFour){
alert("You found a match");
}else {
	alert ("Sorry, try again");
}
//if matching mixed
if (cardThree ===cardTwo){
alert("You found a match");
}else {
	alert ("Sorry, try again");
}
//if matching mixed
if (cardFour ===cardOne){
alert("You found a match");
}else {
	alert ("Sorry, try again");
}*/

console.log("got this working!")
//all the cards array
var cards = ['king', 'queen','king', 'queen'];
//The cards in play
var cardsinPlay = [];
//the board game - can add to it
var board = document.getElementById('game-board');
//function that makes the board
function createBoard(){
//the loop that goes through array. creates card elements
for (var i = 0; i<cards.length; i++){
var cardElement =document.createElement('div');
cardElement.className ='card';
//sets a 'data card'to the element of the array. Stores data about element that's not tied to a style.
cardElement.setAttribute('data-card', cards[i]);
//executes when clicked
cardElement.addEventListener('click', isTwoCards);
 //adding to the foodchain
board.appendChild(cardElement);
board.appendChild(cardElement);

console.log('the board: ', board);
console.log('the cardElement: ', cardElement);
}
}

//checking to see if there are cards in play
function isTwoCards(){
// 'this' element introduction.
cardsinPlay.push(this.getAttribute ('data-card'));
console.log(this.getAttribute ('data-card'));
//showing the image. is it a king. if no, then it's a queen.
if (this.getAttribute('data-card') === 'king'){
//King image
this.innerHTML = "<img src='http://i65.tinypic.com/2aag39v.png'>";
}else {
//queen image
this.innerHTML = "<img src='http://i67.tinypic.com/111qc8h.png'>";
}

//checking for match -two cards
if (cardsinPlay.length===2) {
isMatch(cardsinPlay);
//this clears it for the next round
cardsinPlay=[];
}
}

function isMatch (cards){
if (cards [0] === cards[1]){
alert ("Blimey, you found a match");
}else{ alert ("Sorry, try again");
}
}

createBoard();









