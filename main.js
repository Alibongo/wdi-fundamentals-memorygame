
// original console notification
console.log("got this working!")
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


//game card array
var cards = ['king', 'king', 'queen', 'queen'];

//cards in play
var cardsinPlay = [];
//last session's work is wrapped in createBoard
function createBoard(){
//the board game
var board = document.getElementById('game-board');
var createCards = function(){
	//this is now changed to length to avoid fixed number
	for (var i = 0; i<cards.length; i++){
		var cardElement =document.createElement('div');
		cardElement.className ='card';
		//sets a 'data card'to the element of the array. Stores data about element that's not tied to a style.
		cardElement.setAttribute('data-card', cards[i]);
		// when card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards)
		board.appendChild(cardElement);
		console.log('the board: ', board);
   console.log('the cardElement: ', cardElement);
	}
}
createCards();