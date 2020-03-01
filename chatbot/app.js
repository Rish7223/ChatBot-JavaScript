var form = document.getElementById('form');
var mic = document.getElementById('mic');
var querybox = document.getElementById('questions');
var answerbox = document.getElementById('answer');
const welcome = ["hello", "hey", "namaste"];
const today = ["time", "date", "temperature", "weather"];
const self = ["my", "your"];

// date and time
var Aaj = new Date();
var date = Aaj.getDate()+' '+monthStr((Aaj.getMonth()+1))+' '+Aaj.getFullYear();
var time = Aaj.getHours() +':'+ Aaj.getMinutes();

// function to print month

function monthStr(e){
    var month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for(let i=0; i<=month.length;i++)
    {
        if(i == e){
            var str = month[i-1];
            break;
        }
    }
    return str;
}


// speech recognistion
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("You can speek now!");
};

recognition.onresult = function(e){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    question(transcript.toLowerCase());
}

// function to read the massage
function readOut(massage)
{
    const speech = new SpeechSynthesisUtterance();
    speech.text = massage;
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}

// adding eventlistner to typing
form.addEventListener('submit', function(e){
    e.preventDefault();
    const quizValue = querybox.value.toLowerCase();
    question(quizValue);
    querybox.value = "";
});

// adding eventlistner to voice
mic.addEventListener('click', function(){
    recognition.start();
})

// today function
function todayQuiz(value)
{
    if(value.includes("time"))
    {
        answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
        var ans = "Right now it's "+time;   
        answerbox.innerHTML += "<p>"+ ans +"<p>";
        readOut(ans);
        }
        else if(value.includes("date"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = date;
            answerbox.innerHTML += "<p>"+ans+"<p>";
            readOut(ans); 
        }
        else if(value.includes("temp"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "We are working on It";
            answerbox.innerHTML += "<p>"+ans+"<p>";
            readOut(ans);
        }
        else {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "It's clear outside";
            answerbox.innerHTML += "<p>"+ans+"<p>";
            readOut(ans);
    }
}

// listning function of quiz
function question(quiz)
{
    welcome.forEach(function(e){
        if(quiz.includes(e))
        {   
            if(e === "hello" || e === "hey" || e == "namaste")
            {
                answerbox.innerHTML += '<p class="quiz">'+ quiz + '<p>';
                var ans = "Hello! what is your query?"
                answerbox.innerHTML += '<p>'+ans+'<p>';
                readOut(ans);
            }
        } 
    })
    today.forEach(function(e){
        if(quiz.includes(e))
        {
            todayQuiz(quiz);
        }
    })
    self.forEach(function(e){
        if(quiz.includes(e))
        {
            myself(quiz);
        }
    })
}

// my self function
function myself(value)
{
    if(value.includes("your"))
    {
        if(value.includes("name"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "My name is Jarvis & i am your friend";
            answerbox.innerHTML += "<p>"+ans+"<p>";
            readOut(ans);
        }
        else if(value.includes("creator"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "I am designed by Rishabh Tyagi";
            answerbox.innerHTML += "<p>"+ans+"<p>";
            readOut(ans);
        }
        else if(value.includes("version"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "This is Jarvis 0.1";
            answerbox.innerHTML += "<p>"+ans+"<p>";
            readOut(ans);
        }
        else{
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "Sorry! i didn't get that query";
            answerbox.innerHTML += "<p>"+ans+"<p>";
            readOut(ans);
        }
    }
}
