let header = document.querySelector("header");
let landingscreen =document.getElementById("landingScreen");
let quizContainer = document.getElementById("quizContainer");
let finalContainer = document.getElementById("finalContainer");
let beginQuiz = document.getElementById("beginQuiz");
let Question = document.getElementById("questionTitle");
let resultContainer = document.getElementById("resultContainer");
let btnAnswer1 = document.getElementById("answer1");
let btnAnswer2 = document.getElementById("answer2");
let btnAnswer3 = document.getElementById("answer3");
let btnAnswer4 = document.getElementById("answer4");
let finalScore = document.getElementById("finalScore");
let score = 0;
let time = document.getElementById("time");
let countdown = 75;
let submitButton = document.getElementById("ScoreButton");
let answerButton = document.getElementById(".answerbtn");
//let answerValue = answer.value;
let endScore = 0;
//end of declarations//

let quizQuestions = [
    {
        q: "placeholder",
        answer1: "placeholder",
        answer2: "placehoolder",
        answer3: "placeholder",
        answer4: "placeholder",

    },
    {
        q: "commonly used data types",
        answer1: "hedgehog",
        answer2: "probablywrong",
        answer3: "alsoprobablywrong",
        answer4: "whatifi'mright",
        correctAnswer: "answer4"
    },
    {
        q:"a question",
        answer1: "wrong",
        answer2: "wrong",
        answer3: "right",
        answer4: "wrong",
        correctAnswer: "answer3"
    },
    {
        q:"a question",
        answer1: "right",
        answer2: "wrong",
        answer3: "wrong",
        answer4: "wrong",
        correctAnswer: "answer1"
    },
    {
        q:"a question",
        answer1: "wrong",
        answer2: "right",
        answer3: "wrong",
        answer4: "wrong",
        correctAnswer: "answer2"
    },
    {
        q:"a question",
        answer1: "wrong",
        answer2: "wrong",
        answer3: "right",
        answer4: "wrong",
        correctAnswer: "answer3"
    },
    {
     q:"a question",
        answer1: "right",
        answer2: "wrong",
        answer3: "wrong",
        answer4: "wrong",
        correctAnswer: "answer1"
    },
    {
        q:"a question",
        answer1: "wrong",
        answer2: "wrong",
        answer3: "wrong",
        answer4: "right",
        correctAnswer: "answer4"
    }
];

let Quizindex =0;

//questions array make sure to change to real questions after//

landingScreen.style.display = "block";
quizContainer.style.display = "none";
finalContainer.style.display = "none";
resultContainer.style.display= "none";


beginQuiz.addEventListener("click", function () {
    quizInterval = setInterval(function ()  {
        countdown--;
        time.textContent = "Time remaining: " + countdown;
            if (countdown <=0 || quizQuestions === undefined) {
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
    if (quizQuestions.length > 1) {
        quizQuestions.shift();  
    } else {
        endQuiz();
        return;
    }

    landingScreen.style.display = "none";
    quizContainer.style.display = "block";
    finalContainer.style.display = "none";

    if (quizQuestions !== []) {
        Question.textContent = quizQuestions[Quizindex].q;
        btnAnswer1.textContent = quizQuestions[Quizindex].answer1;
        btnAnswer2.textContent = quizQuestions[Quizindex].answer2;
        btnAnswer3.textContent = quizQuestions[Quizindex].answer3;
        btnAnswer4.textContent = quizQuestions[Quizindex].answer4;
    } else {
        endQuiz();
    }

};

btnAnswer1.addEventListener("click", function () {

    if (answer.value == quizQuestions[Quizindex].correctAnswer) {
        resultResponse.style.display = 'block';
        results.textContent = "Correct";
    } else {
        resultResponse.style.display = 'block';
        results.textContent = "Wrong";
        countDown -= 10;

    }
    showQuestion();
});
btnAnswer2.addEventListener("click", function () {
    if (answerValue === quizQuestions[Quizindex].correctAnswer) {
        resultResponse.style.display = 'block';
        results.textContent = "Correct";
        // quizQuestions.shift();
        // qIndex++;
    } else {
        resultResponse.style.display = 'block';
        results.textContent = "Wrong";
        countDown -= 10;
        // quizQuestions.shift();
        // qIndex++
    }
    showQuestion();
});
btnAnswer3.addEventListener("click", function () {
    if (answerValue === quizQuestions[Quizindex].correctAnswer) {
        resultResponse.style.display = 'block';
        results.textContent = "Correct";
        // quizQuestions.shift();
        // qIndex++;
    } else {
        resultResponse.style.display = 'block';
        results.textContent = "Wrong";
        countDown -= 10;
        // quizQuestions.shift();
        // qIndex++
    }
    showQuestion();
});
btnAnswer4.addEventListener("click", function () {
    if (answerValue !== quizQuestions[Quizindex].correctAnswer) {
        resultResponse.style.display = 'block';
        results.textContent = "Correct";

    } else {
        resultResponse.style.display = 'block';
        results.textContent = "Wrong";
        countDown -= 10;
    }
    showQuestion();
});

