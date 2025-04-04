// ==== Константы ====

const options = ["камень", "ножницы", "бумага"];

const rules = {
    камень: "ножницы",
    ножницы: "бумага",
    бумага: "камень"
};

// ==== DOM-элементы ====

const userChoiceInfo = document.querySelector(".user-choice");
const computerChoiceInfo = document.querySelector(".computer-choice");
const resultInfo = document.querySelector(".result");

// ==== Функции ====

function getUserChoice() {
    let choice = prompt("Камень, ножницы, бумага?").toLowerCase();

    while (!options.includes(choice)) {
        choice = prompt("Что-что? Камень, ножницы, бумага?").toLowerCase();
    }

    return choice;
}

function getComputerChoice() {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Ничья";
    } else if (rules[userChoice] === computerChoice) {
        return "Вы";
    } else {
        return "Компьютер";
    }
}

// ==== Запуск игры ====

const userChoice = getUserChoice();
const computerChoice = getComputerChoice();
const winner = determineWinner(userChoice, computerChoice);

userChoiceInfo.textContent = `Ваш выбор — ${userChoice}`;
computerChoiceInfo.textContent = `Выбор компьютера — ${computerChoice}`;
resultInfo.textContent = `Победитель — ${winner}`;
