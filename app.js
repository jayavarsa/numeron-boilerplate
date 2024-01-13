// Iteration 1: Make the Play button functional.

var play_button = document.getElementById("play-button")
// Description: When the Play button is clicked the game page should be displayed.
function locator(){
    window.location = './game.html'
}
play_button.addEventListener('click' ,locator)
