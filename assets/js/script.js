// Start game function 
    // jumps to following questions
    // click the answer of four options 
    // takes you to next question and display text, if wrong deduct 10 seconds. If correct, display correct
// Game ends if timer is 0  or reached all done page 
// If completed enter intials and save to localStorage



// If wrong deduct 10 seconds from timer and display text 
        
var gameH1El = document.getElementById('quiz-title');
var startBtnEl = document.getElementById('start-btn');
var answerBtnEL = document.getElementById('answerbtn'); 
var questionEl = document.getElementById('question')
var answerButtonEl = document.getElementById("answerbtn")
var resultEl = document.getElementById('result')
var timerEl = document.getElementById('timerCountdown')

// Timer 



var currentQIndex

startBtnEl.addEventListener('click',startGame);
 
function startGame (){
    startBtnEl.classList.add('hide');  
    gameH1El.classList.add('hide')
    currentQIndex = 0 
    setNextQ();
// Start timer on click 
var timeleft = 75;

var startTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(startTimer);
    document.getElementById("timerCountdown").innerHTML = "GAME OVER";
  } else {
    document.getElementById("timerCountdown").innerHTML = "Score " +  timeleft;
  }
  timeleft -= 1;
}, 1000);

}

// Loop through questions and answers 

function setNextQ(){
    showNextQ(currentQIndex)
}   
function showNextQ(question){
    questionEl.innerText = questionList[0]
}

var questionList = ["Which of the following is not a primitive data type in JavaScript?", "Where should you insert a JavaScript?", "How do you call a function named 'newFunction?", "How do you add a comment in a JavaScript?","Which event occurs when the user clicks on an HTML element?"]


// broken
// var questionList = [ 
//     { 
//         question:  "Which of the following is not a primitive data type in JavaScript?",
//         answers: [
//             {text: "Strings", correct: false},
//             {text: "Boolean", correct: false},
//             {text: "Undefined", correct: false},
//             {text: "Function", correct: true},
//        ] 
//     },       
//     { 
//         question:"Where should you insert a JavaScript?",
//         answers: [
//             {text: "The <body> section", correct: true},
//             {text: "Both the <head> section and the <body> section are correct", correct: false},
//             {text: "The <head> section", correct: false},
//             {text: "The <html> section", correct: false},
//         ]
//         },       
//     { 
//         question:"How do you call a function named 'newFunction?",
//         answers: [
//             {text: "newFunction()", correct: true},
//             {text: "call function newFunction()", correct: false},
//             {text: "call newFunction()", correct: false},
//             {text: "newFunction.call", correct: false},
//         ]
//     },       
//     { 
//     question:"How do you add a comment in a JavaScript??",
//     answers: [
//         {text: "//This is a comment", correct: true},
//         {text: "<!--This is a comment-->", correct: false},
//         {text: "'This is a comment", correct: false},
//         {text: "**This is a comment", correct: false},
//        ]
//     },       
//     { 
//     question:"Which event occurs when the user clicks on an HTML element?",
//     answers: [
//         {text: "onclick", correct: false},
//         {text: "onmouseover", correct: false},
//         {text: "onmouseclick", correct: false},
//         {text: "clickon", correct: true},
//        ]
//     },
// ]



// Timer Logic 


// quiz ends when timer reaches 0 or finished answering all 5 questions  


// Track score using local storage 



// var startTimer = function(duration,display){
//     var timer= duration, minutes, seconds;
//     setInterval(function(){
//         minutes = parseInt(timer / 60,10);
//         seconds = parseInt(timer % 60,10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if(--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }