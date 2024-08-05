let userScore = 0;
let ai_co = 0;

const userScore_span = document.getElementById("user-score");
const ai_coscore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");

const choices = ['r', 's', 'p'];

const converttoword = (letter) => {
    return letter === "r" ? "سنگ" : letter === "s" ? "قیچی" : "کاغذ";
}

const updateScores = () => {
    userScore_span.textContent = userScore;
    ai_coscore_span.textContent = ai_co;
}

const win = (user, computer) => {
    userScore++;
    updateScores();
    result_p.textContent = `${converttoword(user)} انتخاب کردی، کامپیوتر ${converttoword(computer)} انتخاب کرد. برنده شدی!!!!`;
}

const lose = (user, computer) => {
    ai_co++;
    updateScores();
    result_p.textContent = `${converttoword(user)} انتخاب کردی، کامپیوتر ${converttoword(computer)} انتخاب کرد. باختی :( `;
}

const draw = (user, computer) => {
    result_p.textContent = `${converttoword(user)} انتخاب کردی، کامپیوتر ${converttoword(computer)} انتخاب کرد. مساوی شدیم!`;
}

const getComputerChoices = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const game = (userChoice) => {
    const computerChoice = getComputerChoices();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    document.getElementById("rock").addEventListener('click', () => game("r"));
    document.getElementById("scissors").addEventListener("click", () => game("s"));
    document.getElementById("paper").addEventListener("click", () => game("p"));
}

main();
