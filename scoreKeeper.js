// DOM selectors in order to manipulate them
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

// 
var numInput = document.querySelector("input");



//initializes scores
var p1Score = 0;
var p2Score = 0;

// determines whether or not game is over
var gameOver = false;

// winning score variable to determine gameOver value
var winningScore = 5;

//changes score according to player 1 button click
p1Button.addEventListener("click", function() {
    //if gameOver is false then keep adding to score
    if(!gameOver) {
        p1Score ++;
        /*if p1's score is equal to the winning score then toggle the winning number's color to green
         and change gameOver's value to true to end game*/
        if (p1Score === winningScore){
            p1Display.classList.toggle("winner");
            gameOver = true;
        }
        // actually displays the text content of what the score is within the p1 span in the HTML document
        p1Display.textContent = p1Score;
    }
})

//same as p1Button
p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score ++;
        if (p2Score === winningScore){
            p2Display.classList.toggle("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})


// calls reset function when it is pressed
resetButton.addEventListener("click", function() {
    reset();
});

function reset() {
    if (p1Score === winningScore) {
        // sets scores back to 0
        p1Score = 0;
        p2Score = 0;
        // displays what the scores are to the HTML document
        p1Display.textContent = p1Score;
        p2Display.textContent = p2Score;
        //gameOver switched back to false in order to "reset" game
        gameOver = false;
        //toggles winner's number color back to black
        p1Display.classList.remove("winner");
    }

    // same as above
    if (p2Score === winningScore) {
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = p1Score;
        p2Display.textContent = p2Score;
        gameOver = false;
        p2Display.classList.remove("winner");
    }
}

// updates winning score on a change
numInput.addEventListener("change", function() {
    // gets value of whatever is in the input and displays it
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    // calls reset so that when numInput changes the game resets
    reset();
})