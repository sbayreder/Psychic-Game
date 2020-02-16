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
 


//if guess is correct
if(letters.indexOf(playerGuess)>-1){
    if (playerGuess===psychicGuess){
        won++;
        attempts=10;
        usedLtr=[];
    }
    //if guess is incorrect
    if (playerGuess!=psychicGuess){
        attempts--;
        usedLtr.push(playerGuess)
    }
    //when you lose
    if (attempts===0){
        attempts=10;
        lost ++;
        usedLtr=[];
    }
//display content in DOM

    document.getElementById("yourGuess").innerHTML = "Your Guesses : " + usedLtr;
    document.getElementById("guessLeft").innerHTML = "Guesses Left :" + attempts;
    document.getElementById("loss").innerHTML = "Losses :" + lost;
    document.getElementById("win").innerHTML = "Wins :" + won;
}}






 
