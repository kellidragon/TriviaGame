$(document).ready(function(){




//start game 
$(".start").on('click', startGame);

//hide option buttons before game start
$(".option").hide();
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
    answers: [ "Madonna","Angelina Jolie","Britney Spears","Queen Latifa"],
    correctAnswer: 3
    },
    {
    question: "Who is Charlie Sheen?",
    answers: ["Charlie Sheen","Donald Trump","William Shatner","Joaqin Pheonix"],
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




//<----------------------------------------------------TIMER------------------------------------------------->


function startGame() {
   
// setInterval to start the count here and set the clock to running.
if (!clockRunning) {
    //to keep timer from speeding up
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    askQuestion();
    gameLogic();
    $(".option").show()
    $(".start").hide()
}
}

function decrement() {
    time--;
    $("#timer-display").html("Time Remaining: " + time);
    if (time === 0) {
        stop();
}
}



function askQuestion(){
    for (var i = 0; i < trivia.length; i++) {
    $('#question').text(trivia[i].question);
    console.log(  $('#question').text())
    $('.option1').text(trivia[i].answers[0]);
    $('.option2').text(trivia[i].answers[1]);
    $('.option3').text(trivia[i].answers[2]);
    $('.option4').text(trivia[i].answers[3]);
    console.log( $('.option').text())
    return;
//display options to choose from

//figure out how to get value from options



// var options =  $('.option').attr("data-value", trivia[i].answers[i])
//  options.text(trivia[i].answers[i]);
//  $('.option').append(options);
//   console.log(options)
  
  
//   var option2 =  trivia[].answers[i];
//   console.log(option2)
//   $('.option2').text(option2[i]);
//   var option3 =   $('.option3').text (trivia[i].answers[3]);
//   var option4 =   $('.option4').text(trivia[i].answers[4]);  


  

   
}
}


function gameLogic(){
    //on click event for answers
//if user guesses correct answer
var userClick = $('option').on("click", function(){
    if(userClick === trivia[i].correctAnswer){
        $(".answer").text("Correct! The answer is: " + trivia[i].correctAnswer)
        $(".image").html("<iframe src='https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif'>")
        wins++
    //if user does not answer and time runs out 
    } else if(userClick === -1){
        $(".answer").text("Out of Time! The answer was: " + trivia[i].correctAnswer)
        $(".image").html("<iframe src='https://media.giphy.com/media/zcVOyJBHYZvX2/giphy.gif'>")
        unanswered++
    } else{
        $(".answer").text("Negative. The answer was: " + trivia[i].correctAnswer)
        $(".image").html("<iframe src='https://media.giphy.com/media/zcVOyJBHYZvX2/giphy.gif'>")
        losses++
    }
    });
};  


  
 

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

























