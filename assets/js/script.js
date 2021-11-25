// Quiz Functionality

var startButtonEl = document.getElementById('start-btn');

startButtonEl.addEventListener('click',startGame);

// 
function startGame (){
    var oneMinute = 60 *1,
    display =document.getElementById("timerCountdown")
    startTimer(oneMinute,display);

}
// Timer Logic 
var startTimer = function(duration,display){
    var timer= duration, minutes, seconds;
    setInterval(function(){
        minutes = parseInt(timer / 60,10);
        seconds = parseInt(timer % 60,10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0) {
            timer = duration;
        }
    }, 1000);
}        




// Add a Timer that starts on click start quiz btn


// quiz ends when timer reaches 0 or finished answering all 5 questions  

// Track score using local storage 

