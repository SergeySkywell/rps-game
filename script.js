const options = ["камень", "ножницы", "бумага"];

// DOM-элементы

const userChoiceInfo = document.querySelector(".user-choice");
const computerChoiceInfo = document.querySelector(".computer-choice");

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