// DOM variables
var submitBtn = document.getElementById("submit-me");
var timer = document.getElementById("timer");
var startQuizBtn = document.getElementById("start-quiz");
var quizPart = document.getElementById("quiz-part");
var startScreen = document.getElementById("starting-screen");
var questionArea = document.getElementById("question-area");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var userScore = document.getElementById("user-score");
var placeholder = document.getElementById("placeholder");
var userName = document.getElementById("userName");
var submitScore = document.getElementById("submit-score");


var interval;
var questionIndex = 0;
var secondsLeft = 75;
var correctAnswer;

// This will start counting the timer down by 1 second. It also dictates what to do when the timer reaches 0.
function startTimer() {
  interval = setInterval(function () {
    secondsLeft--;
    timer.textContent ="Time: " + secondsLeft;
    if (secondsLeft === 0) {
      quizPart.classList.add("d-none");
      submitScore.classList.remove("d-none");
      clearInterval(interval);
      userScore.textContent = "You scored: " + secondsLeft + "!";
      timer.textContent = 0;

      return;
    }
  }, 1000);
}

// This switches from the starting page to the quiz, starts the timer and loads up the first question.
function startQuiz() {
  startScreen.classList.add("d-none");
  quizPart.classList.remove("d-none");
  startTimer();
  nextQuestion();
}

// This is used to generate the questions from the array they are stored in. It also allows the buttons to see the response it is attached to.
function nextQuestion() {
  // The question
  questionArea.textContent = questions[questionIndex].information;
  // The correct answer choice
  correctAnswer = questions[questionIndex].answer;
  var allOptions = questions[questionIndex].options;
  // Answer Buttons
  button1.textContent = questions[questionIndex].options[0];
  button1.onclick = clickAnswer;
  button2.textContent = questions[questionIndex].options[1];
  button2.onclick = clickAnswer;
  button3.textContent = questions[questionIndex].options[2];
  button3.onclick = clickAnswer;
  button4.textContent = questions[questionIndex].options[3];
  button4.onclick = clickAnswer;
}

// This adds 1 to the questionIndex so that the next question can get generated. Both statements will run the nextQuestion function, they will let you know if you were right or wrong and subtract time as a penalty as needed.
function clickAnswer() {
  questionIndex++;
  if (correctAnswer === this.textContent) {
    nextQuestion();
    placeholder.textContent = "Your last response was: Correct!";
  } else {
    secondsLeft = secondsLeft - 10;
    nextQuestion();
    placeholder.textContent = "Your last response was: incorrect. -10 seconds";
  };

//   This switches the page from the quiz to the score submission screen. 
  if (questionIndex == questions.length - 1) {
    quizPart.classList.add("d-none");
    submitScore.classList.remove("d-none");
    clearInterval(interval);
    userScore.textContent = "You scored: " + secondsLeft + "!";
    timer.textContent = 0;
    return;
  };
};

// This allows the users input of their Initials to be saved into local storage. It then switches screen to the highscores page.
function saveHighscore() {
  event.preventDefault();
  var initials = userName.value;
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: secondsLeft,
      initial: initials.toUpperCase(),
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    console.log(highscores);
    window.location.href = "highscores.html";
  };
};

// Runs the saveHighscore function when the submit button is clicked on the score submission screen.
submitBtn.addEventListener("click", saveHighscore);

// Starts the quiz when the user clicks the "Start Quiz" button.
startQuizBtn.addEventListener("click", startQuiz);
