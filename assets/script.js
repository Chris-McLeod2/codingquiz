let header = document.querySelector("header");
let landingscreen =document.getElementById("landingScreen");
let quizContainer = document.getElementById("quizContainer");
let finalContainer = document.getElementById("finalContainer");
let beginQuiz = document.getElementById("beginQuiz");
let Question = document.getElementById("questionTitle");
let resultContainer = document.getElementById("resultContainer");
let resultResponse = document.getElementById("resultResponse")
let btnAnswer1 = document.getElementById("answer1");
let btnAnswer2 = document.getElementById("answer2");
let btnAnswer3 = document.getElementById("answer3");
let btnAnswer4 = document.getElementById("answer4");
let finalScore = document.getElementById("finalScore");
let score = 0;
let time = document.getElementById("time");
let countdown = 75;
let answer = document.querySelector(".answerbtn");
let endScore = 0;
let highScores = document.getElementById("highScores")
//end of declarations//
let Quizindex =0;
let quizQuestions = [
 
    {
        q: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: ""
    },
    {
        q:"a question1",
        answer1: "wrong",
        answer2: "wrong",
        answer3: "right",
        answer4: "wrong",
        correctAnswer: "right"
    },
    {
        q:"a question2",
        answer1: "right",
        answer2: "wrong",
        answer3: "wrong",
        answer4: "wrong",
        correctAnswer: "right"
    },
    {
        q:"a question3",
        answer1: "wrong",
        answer2: "right",
        answer3: "wrong",
        answer4: "wrong",
        correctAnswer: "right"
    },
    {
        q:"a question4",
        answer1: "wrong",
        answer2: "wrong",
        answer3: "right",
        answer4: "wrong",
        correctAnswer: "right"
    },
    {
     q:"a question5",
        answer1: "right",
        answer2: "wrong",
        answer3: "wrong",
        answer4: "wrong",
        correctAnswer: "right"
    },
    {
        q:"a question6",
        answer1: "wrong",
        answer2: "wrong",
        answer3: "wrong",
        answer4: "right",
        correctAnswer: "right"
    }
];



//questions array make sure to change to real questions after//

landingScreen.style.display = "block";
quizContainer.style.display = "none";
finalContainer.style.display = "none";
resultContainer.style.display= "none";


beginQuiz.addEventListener("click", function () {
    quizInterval = setInterval(function ()  {
        countdown--;
        time.textContent = "Time remaining: " + countdown;
            if (countdown <=0 || quizQuestions.length < 1) {
                console.log("end");
                clearInterval(quizInterval)
                quizEnd();
            }
    }, 1000);
    showQuestions();
});

function endQuiz () {
    if (quizQuestions.length === undefined) {
        quizEnd();
    }
}

function showQuestions() {
    console.log(quizQuestions.length)
    quizQuestions.shift(); 
    if (quizQuestions.length < 1) {
        console.log("endquiz")
        endQuiz();
        return;
    }
    Question.textContent = quizQuestions[Quizindex].q;
    btnAnswer1.textContent = quizQuestions[Quizindex].answer1;
    btnAnswer2.textContent = quizQuestions[Quizindex].answer2;
    btnAnswer3.textContent = quizQuestions[Quizindex].answer3;
    btnAnswer4.textContent = quizQuestions[Quizindex].answer4;

    console.log(quizQuestions.length)
    landingScreen.style.display = "none";
    quizContainer.style.display = "block";
    finalContainer.style.display = "none";

  
};
function clickHandler(event) {
var answerValue2 = event.target.innerText;
const correctAnswer = quizQuestions[Quizindex].correctAnswer; 
    if (answerValue2 == correctAnswer) {
        resultContainer.style.display = "block";
        results.textContent = "Correct";
        console.log(correctAnswer)
    } else {
        resultContainer.style.display = "block";
        results.textContent = "Wrong";
        countdown -= 10;
        console.log(correctAnswer)
    }
    showQuestions();

}

btnAnswer1.addEventListener("click", clickHandler);

btnAnswer2.addEventListener("click", clickHandler);
  
btnAnswer3.addEventListener("click", clickHandler);
    
btnAnswer4.addEventListener("click", clickHandler);
   

function quizEnd() {
    landingScreen.style.display = "none";
    quizContainer.style.display = " none";
    finalContainer.style.display ="block";
    resultContainer.style.display ="none";
    finalScore.textContent = countdown;
    endScore = countdown;
    window.alert(endScore)
};

let localStorage = window.localStorage;
let scoreInitials = document.getElementById("scoreInitials");


ScoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    let initials = scoreInitials.value.trim();
    let highScore = JSON.parse(window.localStorage.getItem("highScore")) || [];
    let playerScore = {
        initials: initials,
        score: endScore
    };
    highScore.push(playerScore);
    window.localStorage.setItem("highScore", JSON.stringify(highScore));
    location.replace("highscores.html")
});