const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
userClickedPattern = [];



function nextSequence(){
   const randomNumber = Math.floor(Math.random() * (3 - 0 + 1));
   const randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  
   $(".btn").on('click', function(){
      const userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour);
      playSound(userClickedPattern);
   });
   
}


function playSound(name){
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.volume = 0.2;
   audio.play();
}

nextSequence();






