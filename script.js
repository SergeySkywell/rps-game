const options = ["камень", "ножницы", "бумага"];

const rules = {
    камень: "ножницы",
    ножницы: "бумага",
    бумага: "камень"
};

// DOM-элементы

const userChoiceInfo = document.querySelector(".user-choice");
const computerChoiceInfo = document.querySelector(".computer-choice");
const result = document.querySelector(".result")

// Получаем выбор пользователя

function getUserChoice() {
    let choice = prompt("Камень, ножницы, бумага?").toLowerCase();

    while (!options.includes(choice)) {
        choice = prompt("Что-что? Камень, ножницы, бумага?").toLowerCase();
    }

    return choice;
}

// Генерируем случайный выбор компьютера

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);

    return options[index];
}

// Начинаем игру

const userChoice = getUserChoice();
const computerChoice = getComputerChoice();


userChoiceInfo.textContent = `Ваш выбор — ${userChoice}`;
computerChoiceInfo.textContent = `Выбор компьютера — ${computerChoice}`;

// Определяем победителя

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Ничья';
    } else if (rules[userChoice] === computerChoice) {
        return 'Вы';
    } else {
        return 'Компьютер';
    }
}

const winner = determineWinner(userChoice, computerChoice);

result.textContent = `Победитель — ${winner}`;