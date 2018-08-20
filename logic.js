

//declarations

var crystal = {
    blue: 
    {
        name: "blue",
        value: 0
    },
    green: 
    {
        name: "green",
        value: 0
    },
    red: 
    {
        name: "red",
        value: 0
    },
    yellow: 
    {
        name: "yellow",
        value: 0
    }

}


var currentResult = 0;
var targetResult = 0;
var winCounter = 0;
var lossCounter = 0;




// methods functions and all othrs
var rand_Generator = function(min, max){

return Math.floor(Math.random()*(max-min)) + 1;

}


var startGame = function(){
//reset everything, generate random number html presesnt
 currentResult = 0;

targetResult = rand_Generator(19,120);
crystal.blue.value = rand_Generator(1,12);
crystal.green.value = rand_Generator(1,12);
crystal.red.value = rand_Generator(1,12);
crystal.yellow.value = rand_Generator(1,12);

$("#playerResult").html(currentResult);
$("#targetResult").html(targetResult);


console.log("target result    :"+targetResult);
console.log("blue  :"+crystal.blue.value);
console.log("green  :"+crystal.green.value);
console.log("red  :"+crystal.red.value);
console.log("yellow  :"+crystal.yellow.value);

}
// concept of adding to players panel, and updating html.
var addValues  = function(anything){

currentResult = currentResult + anything.value;
$("#playerResult").html(currentResult);
   checkWin();
    console.log("current result   " + currentResult );
}

//compare the results to count wins or losses, update htmls 
var checkWin = function(){
if(currentResult > targetResult){
    alert("looseloooooooooooooooooooooooooooooossseeeeeeeeeeeeeeeeeeeeeeee");
    console.log("you looosee");
    lossCounter++;
    $("#lossCounter").html(lossCounter);
    startGame();

}
if (currentResult == targetResult){
    alert("congrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaaaaaaaattttttttttt");
    console.log("congrtttttstststs");
    winCounter++;
    $("#winCounter").html(winCounter);
    startGame();
}


}







// main game proessess






$("#blue").click(function(){ 
addValues(crystal.blue);  


});

$("#green").click(function(){        
addValues(crystal.green); 

});

$("#red").click(function(){       
addValues(crystal.red); 

});

$("#yellow").click(function(){      
addValues(crystal.yellow); 

});




startGame();
