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
 

// Start game function 

function startGame (){
    // hide start button and title
    startBtnEl.classList.add('hide');  
    gameH1El.classList.add('hide')
    
  
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

    setNextQ();
}

// function setNextQ(){
//     for (var i = 0; i < mainQuestionList.q1.length; i++){
//         var currentQuestion = mainQuestionList.q1[i];            
//      }

//      questionEl.innerText = currentQuestion

// function to set new question

var currentQIndex = 0;


function setNextQ(){

    // clear current list of questions

    

    var questionDataObj = questionList[currentQIndex].question;

    questionEl.innerText = questionDataObj
    // set a counter outside of currentQIndex
    
    for (var i = 0; i < questionList[currentQIndex].answers.length; i++){
        var choiceEl = document.createElement("li");
        choiceEl.className = "button";
        multipleChoiceEl.appendChild(choiceEl);
        var buttonChoice = document.createElement('button');
        buttonChoice.innerText = questionList[currentQIndex].answers[i];
        buttonChoice.setAttribute("data-id", i);
        choiceEl.appendChild(buttonChoice);     
    }   
  
}






var questionList = [
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        answers: [
            "Strings", "Boolean", "Undefined","Function",
        ],
        correct: 4
    },
    {
        question: "Where should you insert JavaScript in HTML?",
        answers: [
            "The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section", "The <html> section",
        ],
        correct: 1
    },
    {
        question: "How do you call a function named 'newFunction?",
        answers: [
            "newFunction()","call function newFunction()","call newFunction()","newFunction.call",
        ],
        correct: 1
    },
    {
        question: "How do you add a comment in a JavaScript?",
        answers: [
            "//This is a comment", "<!--This is a comment-->", "'This is a comment","**This is a comment",
        ],
        correct: 1
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        answers: [
            "onclick","onmouseover","onmouseclick","clickon",
        ],
        correct: 4
    },
    
]



// var checkAnswer = function(){
//     if (questionList[currentQIndex].correct === ){

//     }
// }
// var selectAnswerEl = document.getElementById("data-id")

// selectAnswerEl.addEventListener("click", checkAnswer)

// var  mainQuestionList = {
//     q1: ["Which of the following is not a primitive data type in JavaScript?", "Where should you insert a JavaScript?", "How do you call a function named 'newFunction?", "How do you add a comment in a JavaScript?","Which event occurs when the user clicks on an HTML element?"],
//     a1: ["Strings", "Boolean", "Undefined","Function"],
//     a2: ["The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section", "The <html> section",],
//     a3: ["newFunction()","call function newFunction()","call newFunction()","newFunction.call"],
//     a4: ["//This is a comment", "<!--This is a comment-->", "'This is a comment","**This is a comment"],
//     a5: ["onclick","onmouseover","onmouseclick","clickon"]

// }




// for (var i=0; i < mainQuestionList.a1.length; i++){
//     var choiceEl = document.createElement("li");
//     choiceEl.className = "button";
//     multipleChoiceEl.appendChild(choiceEl);
//     var buttonChoice = document.createElement('button');
//     buttonChoice.innerText = mainQuestionList.a1[i];
//     buttonChoice.setAttribute("mc-btn", i);
//     choiceEl.appendChild(buttonChoice);
// }





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


