const options = ["камень", "ножницы", "бумага"];

// Спрашиваем пользователя и проверяем

function getUserChoice() {
    let choice = prompt("Камень, ножницы, бумага?").toLowerCase();

    while (!options.includes(choice)) {
        choice = prompt("Что-что? Камень, ножницы, бумага?").toLowerCase();
    }

    return choice;
}

// Функция выбора случайного индекса

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    return options[choice];
}

const userChoice = getUserChoice();
const userChoiceInfo = document.querySelector(".user-choice")
userChoiceInfo.textContent = `Ваш выбор — ${userChoice}`;

const computerChoice = getComputerChoice();
const computerChoiceInfo = document.querySelector(".computer-choice")
computerChoiceInfo.textContent = `Выбор компьютера — ${computerChoice}`;