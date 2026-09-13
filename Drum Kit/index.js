var volume = 1;

var SOUNDS = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass",
};

var audioCache = {};
Object.keys(SOUNDS).forEach(function (key) {
  audioCache[key] = new Audio("./sounds/" + SOUNDS[key] + ".wav");
  audioCache[key].preload = "auto";
});

var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    hit(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  if (event.repeat) return;
  hit(event.key);
});

function hit(key) {
  key = String(key).trim().toLowerCase();
  if (!SOUNDS[key]) return;
  makeSound(key);
  buttonAnimation(key);
}

function makeSound(key) {
  var audio = audioCache[key].cloneNode();
  audio.volume = volume;
  audio.play().catch(function () { });
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  if (!activeButton) return;
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
