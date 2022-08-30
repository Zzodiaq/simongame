const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
userClickedPattern = [];



   $("*").one("keypress", function(){
      nextSequence();
   });


function nextSequence(){
   const randomNumber = Math.floor(Math.random() * (3 - 0 + 1));
   const randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  console.log(randomNumber);
   $(".btn").on('click', function(){
      const userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour);
      playSound(userClickedPattern);
      animatePress(userClickedPattern);
   });
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








