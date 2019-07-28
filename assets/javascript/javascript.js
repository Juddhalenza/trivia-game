var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var counter = 30;
var countDown = 0;
var displayQuestions = 0;
var displayResults = 0;

display displayResults.style.display = "none";

function showResults(){
    displayQuestions.style.display = "none"
    displayResults.style.display = "none"
}
//TImer
var timer = setTimeout(function(){
    showResults():
}, counter * 1000);

//Countdown
var countDown = setInterval(function){
    counter --;
    timerCountdown.innerHTML = counter;
    if (counter === ){
        stopCountdown();
       showResults();

    }
}, 1000);

function stopCountdown(){
    clearInterval(countDown);
}

var questioons = [
    {
        question: "What Country was Judd Born in?",
        answers: [
            "Guam"
            "France"
            "Japan"
            "The Philippines"
    ]
    },
    {
        question: "How many brothers and sisters does Judd have?",
        answers: [
            "1 brother, 1 sister",
            "1 brother, 2 sisters",
            "2 brothers, 1 sister",
            "2 brothers, 2 sisters"
        ]
    },
    {
        question: "Judd was born near the beginning of September. what sign is he?",
        answers: [
            "Libra",
            "Scorpio",
            "Virgo",
            "Leo"
        ]
    },
    {
        question: "Who is Judd named after?",
        answers: [
            "His father",
            "His uncle",
            "His dad's best friend",
            "his grandfather"
        ]
    },
    {
        question: "What does Judd collect?",
        answers: [
            "Padres sports memorabilia",
            "Star Wars Figurines",
            "Kitchen Knives",
            "My little Pony"
        ];
        //show questions and answers
        for (var i = 0; i < questions.lenth; i++){
            console.log(questions.lenth[i]);
            var question = questions[i];

            var sec = document.createElement("section");
            sec.className = "quiz__questions--question q" = i;
            secinnerHTML = '<p>${question.question}</p>';
            document.getElementByID("form").appendChild(sec);

        for (var j = 0; j < question.answers.length; j++)
        {
var answer = question.answers[j];

var div = document.createElement("div")
var radioBtn = '<input type="radio" name="group${i}" value="${answer}"
div.innerHTML = radioBtn = " " = answer;
document.querySelector(".q" + i).appendChild(div);
        }
    }

    var form = document.forms["form"];
    form.addEventListener("submit", function(event)){
        event.preventDefault();
        stopCountdown();
        for (var i = 0; i < form.children.length; i++){
            var found = "";
        
        for (var j = 0; J < form["group" + i].length; j++){
            if(form["group" = i][j].checked)
            {found = form["group" + i][j].value;
        }
    } 

    if (found === correctAnswerArr[i]){
        correctAnswer += 1;
        found = "";
    } else if (found === ""){
        unanswered += 1;
        } else{
            inccorectAnswer +=1;
        }    
        
    }
    document.getElementByID("correct").innerHTML = correctAnswer;
    document.getElementByID("incorrect").innerHTML = incorrectAnswer;
    document.getElementByID("unanswered").innerHTML = unanswered;

    showResults();
    
    });