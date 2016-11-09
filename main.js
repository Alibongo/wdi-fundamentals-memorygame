
// original console notification
console.log("JS file is connected to HTML! Woo!")
//these are the cards
var cardOne = "queen";
var cardTwo  = "queen";
var cardThree = "king";
var cardFour = "king";
//matching queens
if (cardOne === cardTwo){
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
}

