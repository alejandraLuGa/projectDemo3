
var socket = io.connect("http://localhost:8080");
socket.on('gameState', functScore);


var score = 0

function checkAnswer (answer,list1,c) {
    if (answer == list1[c-1]["correct"]){
      score+= 5
    }
}

function functScore(event) {
    const gameState = JSON.parse(event);
    var amountOfPlay  = gameState["baseHealth"];
    if (amountOfPlay === "" || amountOfPlay == null){
        amountOfPlay = 0
    }
    document.getElementById("playerNumber").innerHTML = "Players Online: " + amountOfPlay;
    //alert (amountOfPlay);
}



//module.exports = checkAnswer();
//**testing for checkAnswer()**
//var list1 = qAndA ();
//shuffleAnsInList (list1)
// console.log(list1[0]["choices"]);
// console.log(score);
// checkAnswer("J.K. Rowling", list1, 1)
// console.log(score);
// checkAnswer('Daniel Radcliffe', list1, 1)
// console.log(score);
// //checkAnswer("y3", list1, 1)
//console.log(score);
//checkAnswer("y4", list1, 1)
//console.log(score);
