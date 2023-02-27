
//ask user which play they'd like to make
//store answer as variable
//use a series of if else statements to determine winner

//generate random number
//let compIndex = Math.floor(Math.random() * 3);
    /* 
    rock: 0
    paper: 1
    scissors: 2
    */

//use if statements to assign numbers to rock, paper or scissors
function getComputerChoice() {
        let compIndex = Math.floor(Math.random() * 3);

        if (compIndex === 0) {
        return 'Rock';
        }
        else if (compIndex === 1) {
            return 'Paper';
        }
        else {
            return 'Scissors';
        }
    }
    
//return the answer, store as variable
let compMove =  getComputerChoice();
console.log(compMove);

//let userInput = prompt('Rock, Paper or Scissors?', '');

