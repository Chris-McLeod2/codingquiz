let header = document.querySelector("header");
let landingScreen =document.getElementById("landingScreen");
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
        q:"Whats a good first step in finding where your bugs are in code?",
        answer1: "stare at your computer in confusion",
        answer2: "consult the library",
        answer3: "use Chrome Dev Tools to see what line the error occurs on",
        answer4: "ask a tutor",
        correctAnswer: "use Chrome Dev Tools to see what line the error occurs on"
    },
    {
        q:"What is a css Library commonly used for styling on websites",
        answer1: "Bootstrap",
        answer2: "React",
        answer3: "Jquery",
        answer4: "Node",
        correctAnswer: "Bootstrap"
    },
    {
        q:"How do you call a function",
        answer1: "Function{}",
        answer2: "Function()",
        answer3: "Function[]",
        answer4: "Funtion''",
        correctAnswer: "Function()"
    },
    {
        q:"what is the css to change text color",
        answer1: "background-color:",
        answer2: "text-color",
        answer3: "Color:",
        answer4: "Function(changecolor)",
        correctAnswer: "Color:"
    },
    {
     q:"How do you grab an element by id in javascript",
        answer1: "document.getElementById",
        answer2: "document.querySelect",
        answer3: ".Id",
        answer4: "htmlelement=id",
        correctAnswer: "document.getElementById"
    },
    {
        q:"How to hide elements with Javascript",
        answer1: "element.hide",
        answer2: "hide.element",
        answer3: "vanish",
        answer4: "style.display = 'none'",
        correctAnswer: "style.display = 'none'"
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
    
    quizQuestions.shift(); 
    if (quizQuestions.length < 1) {
        endQuiz();
        return;
    }
    Question.textContent = quizQuestions[Quizindex].q;
    btnAnswer1.textContent = quizQuestions[Quizindex].answer1;
    btnAnswer2.textContent = quizQuestions[Quizindex].answer2;
    btnAnswer3.textContent = quizQuestions[Quizindex].answer3;
    btnAnswer4.textContent = quizQuestions[Quizindex].answer4;

    
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
    } else {
        resultContainer.style.display = "block";
        results.textContent = "Wrong";
        countdown -= 10;
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
