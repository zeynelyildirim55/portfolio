var randomNo1 = Math.floor(Math.random()*6 + 1);
var randomImg1 = "./images/dice" + randomNo1 + ".png";
var randomNo2 = Math.floor(Math.random()*6 + 1);
var randomImg2 = "./images/dice" + randomNo2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImg1);
document.querySelector(".img2").setAttribute("src", randomImg2);

var title = document.querySelector("h1");

if(randomNo1>randomNo2){
    title.textContent = "🚩Player 1 Wins"
} else if(randomNo2>randomNo1){
    title.textContent = "Player 2 Wins🚩"
} else{
    title.textContent = "TIE!"
}