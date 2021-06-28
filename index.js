// Create an Array of at least 3 losing messages
var losingMessages = [
    "Sorry, try again!",
    "Nope, not this one",
    "Yikes, better luck next time!",
]

// Create variables to count wins and losses
var countsWins = 0
var countsLosses = 0


// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var showmessage = document.getElementById('message');
var showwins = document.getElementById('wins');
var showlosses = document.getElementById('losses');


// target all .box elements and attach a click event listener to each one using a loop
var coloredboxes = document.querySelectorAll('.box')
for ( i = 0; i < coloredboxes.length; i++) {
  var box = coloredboxes[i]
  box.onclick = clickHandler
}


// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

function clickHandler(event) {
  var numbers = parseInt(this.textContent);

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
  var winner = Math.floor((Math.random() * 3) + 1);


// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses

if (winner === numbers) {
  showmessage.textContent = 'YAY! YOU WIN!'
  countsWins = ++countsWins
  showwins.textContent= "Wins:   " + countsWins

}

else {
  showmessage.textContent = losingMessages [Math.floor(Math.random() * 3)];
  countsLosses = ++countsLosses
  showlosses.textContent = "Losses:   " +countsLosses
}
};


