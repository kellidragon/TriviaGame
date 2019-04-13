$(document).ready(function(){




//start game 
$(".start").on('click', startGame);
$(".submit").on('click', gameOver);
$("form").hide();
$(".submit").hide();

//variables to track 
var wins= 0;
var losses = 0;
var clockRunning = false;
var time = 120;



//  Variable that will hold setInterval that runs the stopwatch
var intervalId;

function startGame() {
// setInterval to start the count here and set the clock to running.
if (!clockRunning) {
    //to keep timer from speeding up
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
    game();
    $("form").show();
    $(".start").hide()
    $("#descrip").hide();
    $(".submit").show();
}
}

function decrement() {
    time--;
    $("#timer-display").html("Time Remaining: " + time);
    if (time === 0) {
        stop();
        gameOver();
}
}
function stop() {
  
    // clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
    //display results
}


function game(){

    //on click event for answers
//if user guesses correct answer

    var formInput = $("radio");
    var checked = false;
    var userAnswer;
    
// click events to track answers
    $(".answer").on("click", function(){
        wins++
    })

    $(".wrong").on("click", function(){
        losses++
        console.log("wrong")
    })
    
    for( let i = 0; i < formInput.length; i++ ) {
       if(formInput[i].checked) {
         userAnswer = formInput[i].value;
       }
    } 
// if user clicks submit without filling out the form
    if(!checked) {
      return;
    }
    if(time===0){
        gameOver();
    }
// Correct answer
    if(userAnswer === answers[i] && time > 0) {
        wins++
 
      ;
    }
// incorrect answer
    else {
       lossess++

    }
    
    }

//displays result page
function gameOver() {
    clearInterval(intervalId);
    clockRunning = false;
    time = 0;
    $("form").hide();
    $(".submit").hide();
    $("#descrip").hide();
    $("#results").text("THE RESULTS ARE IN").addClass("results")
    $("#wins").text("Correct: "+ wins).addClass("score")
    $("#losses").html("Wrong: "+ losses).addClass("score")
    if(wins > losses){
        $("#blurb").text("Looks like you know crazy pretty well...")
        $("#image").append($("<img>").attr("src", "assets/images/yay.gif"))
    }else{
        $("#blurb").text("Time to brush up on your crazy...")
        $("#image").append($("<img>").attr("src", "assets/images/renaldo.gif"))
}

}
})


























