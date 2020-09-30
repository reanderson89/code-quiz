function displayScores(){
    var scoresList = document.getElementById("scores-list");
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    console.log(highscores.length);
    for (var i = 0; i < highscores.length; i++) {
        var p = document.createElement("p");
        p.textContent = highscores[i].initial+" "+ highscores[i].score;
        scoresList.appendChild(p);
    };
}
displayScores();