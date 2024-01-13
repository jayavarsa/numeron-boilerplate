// Iteration 5: Store the player score and display it on the game over screen
var total_score = localStorage.getItem("score")

var score = document.getElementById("score-board")
var play_button = document.getElementById("play-again-button")

score.innerHTML = total_score;

play_button.addEventListener('click',function(){
    window.location.href="./game.html";
})