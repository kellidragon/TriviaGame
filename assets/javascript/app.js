$(document).ready(function(){




//start game 
$(".start").on('click', startGame);

//variables to track 
var wins= 0;
var losses = 0;
var unanswered =0;
var clockRunning = false;
var time = 30;
var userAnswer =0;
var currentQ =0;

//  Variable that will hold setInterval that runs the stopwatch
var intervalId;

var trivia = [{
    question:"Who is Britney Spears?", 
    answers: {
        1: "Madonna",
        2: "Angelina Jolie",
        3: "Britney Spears",
        4: "Queen Latifa"
    },
    correctAnswer: 3
    },
    {
    question: "Who is Charlie Sheen?",
    answers: {
        1: "Charlie Sheen",
        2: "Donald Trump",
        3: "William Shatner",
        4: "Joaqin Pheonix",
    },
    correctAnswer: 1
}
    // "Who is Bynes?": "Amanda Bynes", 
    // "Who is Lilo?": "Lindsay Lohan",
    // "Who is KW": "Kanye West",
    // "Who is Joaquin Phoenix?": "Joaquin Phoenix",
    // "Who is Snooki?": "Snooki",

]
console.log(trivia[0]);

//show one question until player answers or time runs out

//page load timer starts 


//<----------------------------------------------------TIMER------------------------------------------------->


function startGame() {
   
// setInterval to start the count here and set the clock to running.
if (!clockRunning) {
    //to keep timer from speeding up
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    askQuestion();

}
}

function decrement() {
    time--;
    $("#timer-display").html("Time Remaining: " + time);
    if (time === 0) {
        stop();
      
//if user guesses correct answer
} if(userAnswer === trivia.correctAnswer){
    $(".answer").text("Correct! The answer is: " + trivia.correctAnswer)
    $(".image").html("<iframe src='https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif'>")
    wins++
//if user does not answer and time runs out 
} else if(userAnswer === -1){
    $(".answer").text("Negative. The answer was: " + trivia.correctAnswer)
    $(".image").html("<iframe src='https://media.giphy.com/media/zcVOyJBHYZvX2/giphy.gif'>")
    unanswered++
}

}


function askQuestion(){
    // gets all the questions then indexes the current questions
    for (var i = 0; i < trivia.length; i++) {
    $('#question').text(trivia[i].question);
    $('#options').text(trivia[i].answers[1]);
    $('#options').append('<br>' + trivia[i].answers[2]);
    $('#options').append('<br>' + trivia[i].answers[3]);
    $('#options').append('<br>' + trivia[i].answers[4]);
 
}

}
function stop() {
  
    // clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
   

    }

//runs the start game function 



function restartGame() {

    time = 0;
    lap = 1;
  
    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");
  
    // DONE: Empty the "laps" div.
    $("#laps").text("");
  }
//player can only select one answer
//if correct answer selected load new screen with congrats - wait a few seconds and then next question
//if correct wrong selected load new screen with wrong and display correct answer - wait a few seconds and then next question
//if time runs out load new screen - times up! wait a few seconds then load the next question



//after last question show screen with number of correct answers, wrong answers, button to restart game
// $('.start').hide();

})

























