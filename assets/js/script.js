// Start game function 
    // jumps to following questions
    // click the answer of four options 
    // takes you to next question and display text, if wrong deduct 10 seconds. If correct, display correct
// Game ends if timer is 0  or reached all done page 
// If completed enter intials and save to localStorage



// If wrong deduct 10 seconds from timer and display text 
        
var gameH1El = document.getElementById('quiz-title');
var startBtnEl = document.getElementById('start-btn');
var questionEl = document.getElementById('question')
var multipleChoiceEl = document.getElementById("answerbtn")
var resultEl = document.getElementById('result')
var timerEl = document.getElementById('timerCountdown')


startBtnEl.addEventListener('click',startGame);
 
function startGame (){
    startBtnEl.classList.add('hide');  
    gameH1El.classList.add('hide')
    currentQIndex = 0 
    setNextQ();

    // Start timer on click 
    var timeleft = 2;

    var startTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(startTimer);
        document.getElementById("timerCountdown").innerHTML = "Game over";
    } else {
            document.getElementById("timerCountdown").innerHTML = "Score " +  timeleft;
    }
    timeleft -= 1;
        }, 1000);

    // Loop with data attribute id 
    for (var i=0; i < mainQuestionList.a1.length; i++){
        var choiceEl = document.createElement("li");
        choiceEl.className = "button";
        multipleChoiceEl.appendChild(choiceEl);
        var buttonChoice = document.createElement('button');
        buttonChoice.innerText = mainQuestionList.a1[i];
        buttonChoice.setAttribute("mc-btn", i);
        choiceEl.appendChild(buttonChoice);
    }
}


// Loop through questions and answers 
var currentQIndex 

function setNextQ(){
    showNextQ(currentQIndex);
}   
function showNextQ(question){
    questionEl.innerText = mainQuestionList.q1[0]
}   
var  mainQuestionList = {
    q1: ["Which of the following is not a primitive data type in JavaScript?", "Where should you insert a JavaScript?", "How do you call a function named 'newFunction?", "How do you add a comment in a JavaScript?","Which event occurs when the user clicks on an HTML element?"],
    a1:["Strings", "Boolean", "Undefined","Function"],
    a2: ["The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section", "The <html> section",],
    a3: ["newFunction()","call function newFunction()","call newFunction()","newFunction.call"]

}



// var answers = [
//     answer1, {
//             text: "Strings", correct: false},
//             {text: text: "Boolean", correct: false},
//             {text: "Undefined", correct: false},
//             {text: "Function", correct: true},
// ]

// console.log(ansers);
// broken
// var questionList = [ 
//     { 
//         question:  "Which of the following is not a primitive data type in JavaScript?",
//     var answersTest= [
//             {text1: "Strings", correct: false},
//             {text2: "Boolean", correct: false},
//             {text3: "Undefined", correct: false},
//             {text4: "Function", correct: true},
//        ]  
// typeof(answersTest);
// console.log(answersTest);
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