let highScore = JSON.parse(localStorage.getItem("highScore"));
let scoreList = document.getElementById("scoreList");

function CreateScoreList () {
    highScore.sort(function(a,b) {
        return b.score- a.score
    })
    for (i = 0; i < highScore.length; i++) {
        let makelist = document.createElement("li");
        makelist.className = "highestScores";
        makelist.textContent = highScore[i].initials + " - " + highScore[i].score;
        scoresList.appendChild(makelist);
    }
}





let clearScores =document.getElementById("clearScores")

clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
})