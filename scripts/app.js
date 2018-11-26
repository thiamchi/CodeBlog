let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
const userchoice_img = document.getElementById("user-choice");
const computerchoice_img = document.getElementById("computer-choice");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter){
    switch(letter) {
        case "r": return "Rock"; break;
        case "p": return "Paper"; break;
        case "s": return "Scissors"; break;
    }
}

function convertToImg(letter){
    switch(letter) {
        case "r": return "../images/rock.png"; break;
        case "p": return "../images/paper.png"; break;
        case "s": return "../images/scissors.png"; break;
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow') , 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You Lose!`;
    document.getElementById(userChoice).classList.add('red-glow');    
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow') , 300);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = "Draw";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow') , 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    userchoice_img.src=convertToImg(userChoice);
    computerchoice_img.src=convertToImg(computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function initialise(){
    result_p.innerHTML = "Fight";
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();