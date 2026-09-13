var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

var volume = 0.5;

var sounds = {};
["red", "blue", "green", "yellow", "wrong"].forEach(function (name) {
  sounds[name] = new Audio("sounds/" + name + ".wav");
  sounds[name].preload = "auto";
});

$(".btn").click(function (event) {
  if (started) {
    event.stopPropagation();
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  }
});

function nextSequence() {
  started = true;
  level++;
  $("#level-title").text("Level " + level);
  userClickedPattern = [];

  var randomNum = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNum];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

$(document).on("keydown click", function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});

function playSound(name) {
  if (!sounds[name]) return;
  var audio = sounds[name].cloneNode();
  audio.volume = volume;
  audio.play().catch(function () { });
  return audio;
}

function animatePress(currentColour) {
  var btn = $("#" + currentColour);
  btn.addClass("pressed");
  setTimeout(function () {
    btn.removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press a Key or Tap to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
