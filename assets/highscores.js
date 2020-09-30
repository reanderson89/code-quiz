// DOM variables
var clearScores = document.getElementById("clear-scores");
var scoresList = document.getElementById("scores-list");
var noScores = document.getElementById("no-scores");

// This will get the users input from local storage, run it through a for loop and generate a list of all the scores.
function displayScores() {
  noScores.textContent = "Success and failure both take time and hard work";
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  for (var i = 0; i < highscores.length; i++) {
    var p = document.createElement("p");
    p.textContent =
      "Initials: [ " +
      highscores[i].initial +
      " ]" +
      " " +
      "  - Score: [ " +
      highscores[i].score +
      " ]";
    p.setAttribute("style", "background-color: lightblue");
    p.setAttribute("class", "col-md");
    scoresList.appendChild(p);
  }
}
// Runs the displayScores function automatically so that any saved scores will always be shown.
displayScores();


// When "Clear Scores" button is clicked this will remove the scores from the page and also from local storage.
clearScores.addEventListener("click", function (event) {
  event.preventDefault();
  scoresList.parentNode.removeChild(scoresList);
  window.localStorage.clear();
  noScores.textContent = "Wait... Where did they go?";
});
