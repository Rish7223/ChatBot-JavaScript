var form = document.getElementById('form');
var mic = document.getElementById('mic');
var querybox = document.getElementById('questions');
var answerbox = document.getElementById('answer');
const welcome = ["hello", "hey", "namaste"];
const today = ["time", "date", "temperature", "weather"];
const self = ["my", "your"];


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
        answerbox.innerHTML += "<p>Right now it's 11:34pm ! Sleep Well<p>";
        }
        else if(value.includes("date"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>15 FEB 2020<p>"; 
        }
        else if(value.includes("temp"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>It's 60<sup>o</sup>C<p>";
        }
        else {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>It's clear outside<p>";
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
                answerbox.innerHTML += '<p>'+ e +' Rishabh! what is your query?<p>';
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
    if(value.includes("my"))
    {
        if(value.includes("my name"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>Your name is Rishabh Tyagi<p>"; 
        }

        else if(value.includes("university"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>Chandigarh University<p>"; 
        }
        else if(value.includes("course"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>Bechlour of Computer Application(BCA)<p>"; 
        }
        else{
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>sorry! i didn't get that query<p>"; 
        }
    }
    else if(value.includes("your"))
    {
        if(value.includes("name"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>My name is Jarvis & i am your friend<p>";
        }
        else if(value.includes("creator"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>I am designed by Rishabh Tyagi<p>";
        }
        else if(value.includes("version"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>This is Jarvis 0.1<p>";
        }
        else{
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            answerbox.innerHTML += "<p>sorry! i didn't get that query<p>";
        }
    }
}


