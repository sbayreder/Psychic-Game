//variables and counters

var won=0;
var lost=0;
var attempts= 10;
var usedLtr= [];
var letters=[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];


//computer Psychic letter pick
document.onkeyup=function(event){
    var playerGuess=event.key;
    var psychicGuess=letters[Math.floor(Math.random()* letters.length)];
    console.log(psychicGuess)
}


//if guess is correct
if(letters.indexOf(playerGuess)>-1){
    if (playerGuess===psychicGuess){
        won++;
        attempts=10;
        usedLtr=[];
    }
    if (playerGuess!=psychicGuess){
        attempts--;
        usedLtr.push(playerGuess)
    }
}



//correct guess


//incorrect guess



//when out of attempts


//displaying content on HTML
//onkeyup= document.getElementById("yourGuess").innerHTML = [usedLtr]
