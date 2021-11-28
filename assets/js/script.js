    // jumps to following questions
    // click the answer of four options 
    // takes you to next question and display text, if wrong deduct 10 seconds. If correct, display correct
// Game ends if timer is 0  or reached all done page 
// If completed enter intials and save to localStorage



// If wrong deduct 10 seconds from timer and display text 
        
var gameH1El = document.getElementById('quiz-title');
var startBtnEl = document.getElementById('start-btn');
var questionEl = document.getElementById('question')
var multipleChoiceEl = document.getElementById("answersWrapper")
var resultEl = document.getElementById('result')
var timerEl = document.getElementById('timerCountdown')
var pageEl = document.getAnimations('quizcontainer')


startBtnEl.addEventListener('click',startGame);
 

var timeleft = 60;


var startTimer = function(){
    var timer = setInterval(function(){
    if( timeleft >1){
        document.getElementById("timerCountdown").innerHTML = "Score " +  timeleft;
        timeleft -= 1;

        
        
    } else if (timeleft <= 0 || quizComplete){
        clearInterval(timer);
        document.getElementById("timerCountdown").innerHTML = "Game over";
        finish();
        
      

    }
        }, 1000);
}
        


// Start game function 

var quizComplete = false;

function startGame (){

    
    // hide start button and title
    startBtnEl.classList.add('hide');  
    gameH1El.classList.add('hide')
    
    
    setNextQ();
    startTimer();
}

// function setNextQ(){
//     for (var i = 0; i < mainQuestionList.q1.length; i++){
//         var currentQuestion = mainQuestionList.q1[i];            
//      }

//      questionEl.innerText = currentQuestion

// function to set new question

var currentQIndex = 0;


function setNextQ(){
    multipleChoiceEl.innerHTML = ""

    // clear current list of questions

    var questionDataObj = questionList[currentQIndex].question;

    questionEl.innerText = questionDataObj
    // set a counter outside of currentQIndex
    
    for (var i = 0; i < questionList[currentQIndex].answers.length; i++){
        var choiceEl = document.createElement("li");
        multipleChoiceEl.appendChild(choiceEl);
        var buttonChoice = document.createElement('button');
        buttonChoice.innerText = questionList[currentQIndex].answers[i];
        buttonChoice.setAttribute("data-id", i);
        buttonChoice.className = "button";
        choiceEl.appendChild(buttonChoice);     
    }   
  

}






var questionList = [
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        answers: [
            "Strings", "Boolean", "Undefined","Function",
        ],
        correct: 3
    },
    {
        question: "Where should you insert JavaScript in HTML?",
        answers: [
            "The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section", "The <html> section",
        ],
        correct: 0
    },
    {
        question: "How do you call a function named 'newFunction?",
        answers: [
            "newFunction()","call function newFunction()","call newFunction()","newFunction.call",
        ],
        correct: 0
    },
    {
        question: "How do you add a comment in a JavaScript?",
        answers: [
            "//This is a comment", "<!--This is a comment-->", "'This is a comment","**This is a comment",
        ],
        correct: 0
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        answers: [
            "onclick","onmouseover","onmouseclick","clickon",
        ],
        correct: 0
    },
    
]

var questionEventHandler = function(event){
    var isAnswer = event.target.matches("button");

    if (isAnswer){
        var answerBtn = event.target;
        var isCorrect = questionList[currentQIndex].correct === parseInt(answerBtn.dataset.id)
        
        if (!isCorrect) {
            timeleft -=10;
        }
        
        if(currentQIndex < questionList.length -1){
            currentQIndex++
            setNextQ();
        
         } else {
            finish(); 
         }
    }



}



var finish = function (){

    quizComplete = true;
    multipleChoiceEl.innerHTML = ""
    questionEl.innerHTML =""
    var showResultEl = document.createElement("h3");
    resultEl.appendChild(showResultEl);
    showResultEl.innerText = "Congratulations! Your final score is " + timeleft;
    var formEl = document.createElement("input");
    formEl.setAttribute("name", "initials")
    formEl.setAttribute("type","text");
    formEl.setAttribute("placeholder","Enter your initals")
    var formElBtn = document.createElement("button");
    resultEl.appendChild(formEl);
    formElBtn.className = "button";
    resultEl.appendChild(formElBtn)
    formElBtn.innerText = "Submit";
    var enterInitials = document.createElement("p");
    resultEl.appendChild(enterInitials);

    formElBtn.addEventListener("click", saveInitial)

    
}

var saveInitial = function(event){
    var buttonSubmit = event.target;
    var initialsvalue = document.querySelector("input[name='initials']").value;

    var userInfo = { 
        intitials: initialsvalue,
        score: timeleft
    }

    saveScore(userInfo);
    
}


multipleChoiceEl.addEventListener("click", questionEventHandler)

var saveScore = function(userInfo){
    localStorage.setItem("High Score", JSON.stringify(userInfo));
  }











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


