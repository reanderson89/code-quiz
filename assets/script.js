
// var h1 = document.createElement("h1");
// h1.textContent = "Hello World";
// document.body.appendChild(h1);

// main screen has a "start quiz" button with some writing above it. 

// The timer in the top right is set to 0 until start quiz is clicked then it is set to 75.

// There is a "View Highscores" button in the top left that when clicked lists out all of the scores. (maybe top 5).

// on click of start quiz the screen changes to a question and the timer begins to countdown from 75 seconds. 

// on click of an answer the screen changes again, on the next screen text flashes underneath the answers telling you if you are right or wrong.

// If you are wrong then you lose 15 seconds from your time.

// If you finish the quiz before time runs out then your score is total time remaining.

// if time reaches 0 before you finish all of the questions, your score would be 0. Better luck next time.

// When you get your score you input your name and submit it, the screen then changes to the highscores page where you can see your score.

var body = document.querySelectorAll("body");
var mainSection = document.getElementById("main-section");
var initialInfo = document.getElementById("initial-info");
var submitScore = document.getElementById("submit-score");
var timer = document.getElementById("timer");
var startQuizBtn = document.getElementById("start-quiz");
var answerButtons = document.getElementById("answers");
var quizPart = document.getElementById("quiz-part");
var startScreen = document.getElementById("starting-screen");
var questionArea = document.getElementById("question-area");
var button1 = document.getElementById("button1"); 
var button2 = document.getElementById("button2"); 
var button3 = document.getElementById("button3"); 
var button4 = document.getElementById("button4"); 
var userScore = document.getElementById("user-score");

var interval;
var questionIndex = -1;
var secondsLeft = 75;  

    function startTimer() {
    
    interval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft === 0){
            clearInterval(interval);
        }
    }, 1000);
    };

    function startQuiz(){
        startScreen.classList.add("d-none");
        quizPart.classList.remove("d-none");
        startTimer();
        nextQuestion();
    }
    
    function nextQuestion(){
        questionIndex++;
        // The question
        questionArea.textContent = questions[questionIndex].information;
        // The correct answer choice
        var answer = questions[questionIndex].answer
        // Answer Buttons
        button1.textContent = questions[questionIndex].options[0];
        button2.textContent = questions[questionIndex].options[1];
        button3.textContent = questions[questionIndex].options[2];
        button4.textContent = questions[questionIndex].options[3]; 
        
        if (questionIndex >= 5){
            quizPart.classList.add("d-none");
            submitScore.classList.remove("d-none");
            clearInterval(interval);
            userScore.textContent = "You scored: " + secondsLeft + "!";
            return;
        } 
    };


    



answerButtons.addEventListener("click", nextQuestion);



// startQuizBtn.addEventListener("click", startTimer);
startQuizBtn.addEventListener("click", startQuiz);
