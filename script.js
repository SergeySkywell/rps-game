// Спрашиваем пользователя и проверяем

function getUserChoice() {
    const options = ["камень", "ножницы", "бумага"];

    let choice = prompt("Камень, ножницы, бумага?").toLowerCase();

    while (!options.includes(choice)) {
        choice = prompt("Что-что? Камень, ножницы, бумага?").toLowerCase();
    }

    return choice;
}

const userChoice = getUserChoice();

const choiceInfo = document.querySelector(".user-choice")

choiceInfo.textContent = `Ваш выбор — ${userChoice}`;