const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
userClickedPattern = [];
let level = 0;


$("body").one("keypress", function(){
   nextSequence();
   $("#level-title").html("Level " + level);
})



$(".btn").on('click', function(){
   const userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   playSound(userClickedPattern);
   animatePress(userClickedPattern);
   checkAnswer();
});

function nextSequence(){
   level++;
   $("#level-title").html("Level " + level);
   const randomNumber = Math.floor(Math.random() * (3 - 0 + 1));
   const randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}


function playSound(name){
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.volume = 0.2;
   audio.play();
}



function animatePress(currentColour){
   $('#' + currentColour).addClass("pressed");
   setTimeout(function(){
      $('#' + currentColour).removeClass("pressed");
   }, 100);
}

 
function checkAnswer(currentLevel){

}







