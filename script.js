//ways to include js in page: alert, prompt, log

//make an array with the possible results
//associate each item in the array with a number
//make a function to generate a random number within the range of the array
//return result

//game options array
let gameChoice = ['Rock', 'Paper', 'Scissors'];

//computer random choice
function compRandomize(arr) {
    let compRandom = Math.floor(Math.random() * arr.length);
    let compIndex = arr[compRandom];
    return compIndex;
}

let computerSelection = compRandomize(gameChoice);

let playerSelection = prompt('Rock, Paper or Scissors?','');

//get player move, normalize it to all lowercase, associate move with an integer 0-2
//run function for computer move, normalize it to all lowercase, associate move with an integer 0-2
//compare the two answers, return answer based on which answer is higher
function gamePlay(playerSelection, computerSelection){
    let playerSelectionNormalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerSelectionNormalized = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    let compArrIndex = gameChoice.indexOf(computerSelectionNormalized);
    let playerArrIndex = gameChoice.indexOf(playerSelectionNormalized);
    return console.log(computerArrIndex);
    return console.log(playerArrIndex);
    }

