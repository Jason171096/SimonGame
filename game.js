let colors = { 1: "red", 2: "green", 3: "blue", 4: "yellow" };
let round = [0];
let random;
let isStart = true;
let index = 1;

$(function () {
  $("body").on("keydown", function () {
    if (isStart) {
      nextLevel();
      isStart = false;
    }
  });
});

const finishGame = () => {
  $("#level-title").text("Game over, Press any key to restart");
  isStart = true;
  round = [0];
  index = 1;
  $("body").addClass("game-over");
  let beat = new Audio("/sounds/wrong.mp3");
  setTimeout(() => {
    beat.play();
      $("body").removeClass("game-over"), 300
  })
};

const nextLevel = () => {
    setTimeout(() => {
      $("#level-title").text("Level " + round.length + "");
  random = Math.floor(Math.random() * 4) + 1;
  round.push(random);
  console.log(random)
  let beat = new Audio("/sounds/"+colors[random]+".mp3");
  $("#" + colors[random] + "").css("visibility", "hidden");
  beat.play();
  setTimeout(() => {
      $("#" + colors[random] + "").css("visibility", "visible");
  }, 300);
  index = 1; 
}, 500)
};

const pressedColor = (numberColor) => {
        $("#" + colors[numberColor] + "").addClass("pressed");
        let beat = new Audio("/sounds/"+colors[numberColor]+".mp3");
        beat.play();
        setTimeout(() => {
          $("#" + colors[numberColor] + "").removeClass("pressed");
        }, 300);
}

const restartGame = () => {
  round = [0];
  $("level-title").text("Level " + round.length + "");
};

const validatePressedColor = (numberColor) => {
    console.log(numberColor)
    console.log(round[index])
    
        if(round[index] === numberColor) {
            index++;
            if(index === round.length) {
              nextLevel();
          } 
        }
        else if(round[index] !== numberColor) {
          finishGame();
      }
        
        
}

$("#"+colors[1]+"").click(() => {
    pressedColor(1);
    validatePressedColor(1)
})

$("#"+colors[2]+"").click(() => {
    pressedColor(2);
    validatePressedColor(2)
})

$("#"+colors[3]+"").click(() => {
    pressedColor(3);
    validatePressedColor(3)
})

$("#"+colors[4]+"").click(() => {
    pressedColor(4);
    validatePressedColor(4)
})


