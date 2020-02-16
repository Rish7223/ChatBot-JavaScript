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

// function to read the massage
function readOut(massage)
{
    const speech = new SpeechSynthesisUtterance();
    speech.text = massage;
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 0.7;
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
        var ans = "Right now it's 11:34pm ! Sleep Well";   
        answerbox.innerHTML += "<p>"+ ans +"<p>";
        readOut(ans);
        }
        else if(value.includes("date"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "15 FEB 2020";
            answerbox.innerHTML += "<p>"+ans+"<p>";
            readOut(ans); 
        }
        else if(value.includes("temp"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "It's 22.5 degree celsius";
            answerbox.innerHTML += "<p>It's 22.5<sup>o</sup>C<p>";
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
                var ans = "Hello Rishabh! what is your query?"
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
    if(value.includes("my"))
    {
        if(value.includes("my name"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "Your name is Rishabh Tyagi!"
            answerbox.innerHTML += "<p>"+ans+"<p>"; 
            readOut(ans);
        }

        else if(value.includes("university"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "Chandigarh University";
            answerbox.innerHTML += "<p>"+ans+"<p>";
            readOut(ans); 
        }
        else if(value.includes("course"))
        {
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "Bachelor of Computer Application"
            answerbox.innerHTML += "<p>Bachelor of Computer Application(BCA)<p>";
            readOut(ans); 
        }
        else{
            answerbox.innerHTML += '<p class="quiz">'+ value + '<p>';
            const ans = "sorry! i didn't get that query";
            answerbox.innerHTML += "<p>"+ans+"<p>"; 
            readOut(ans);
        }
    }
    else if(value.includes("your"))
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
