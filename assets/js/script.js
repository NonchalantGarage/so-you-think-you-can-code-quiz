var gameH1El = document.getElementById('quiz-title');
var startBtnEl = document.getElementById('start-btn');
var questionEl = document.getElementById('question')
var multipleChoiceEl = document.getElementById("answersWrapper")
var resultEl = document.getElementById('result')
var timerEl = document.getElementById('timerCountdown')
var pageEl = document.getAnimations('quizcontainer')


startBtnEl.addEventListener('click',startGame);
 

var timeleft = 60;  

// quiz ends when timer reaches 0 or finished answering all 5 questions  

var startTimer = function(){
    var time = setInterval(function(){
        // Game ends if timer is 0  or reached end page 

    if(timeleft >1){
        document.getElementById("timerCountdown").innerHTML = "Score " +  timeleft;
        timeleft -= 1;
        
    } else {
        document.getElementById("timerCountdown").innerHTML = "Game over";
        clearInterval(time);
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
    // clears question
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

        // If wrong deduct 10 seconds from timer and display text 

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
// Track score using local storage 

var saveScore = function(userInfo){
    localStorage.setItem("High Score", JSON.stringify(userInfo));
  }












