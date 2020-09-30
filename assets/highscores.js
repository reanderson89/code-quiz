var clearScores = document.getElementById("clear-scores");
var scoresList = document.getElementById("scores-list");
var noScores = document.getElementById("no-scores");

function displayScores() {
  noScores.classList.add("d-none");
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

displayScores();

function clearContent(remOnClick) {
  scoresList.parentNode.removeChild(scoresList);
}

clearScores.addEventListener("click", function (event) {
  event.preventDefault();
  window.localStorage.clear();
  noScores.classList.remove("d-none");
  noScores.textContent = "Where did they go?";
});
