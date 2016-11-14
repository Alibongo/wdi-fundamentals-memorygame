
// original console notification
console.log("got this working!")
//My cards
var cardOne = "queen";
var cardTwo  = "queen";
var cardThree = "king";
var cardFour = "king";
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
var board = document.getElementById('game-board');
var createCards = function(){
	for (var i = 0; i<4; i++){
		var cardElement =document.createElement('div');
		cardElement.className ='card';
		board.appendChild(cardElement);
		console.log('the board: ', board);
   console.log('the cardElement: ', cardElement);
	}
}
createCards();