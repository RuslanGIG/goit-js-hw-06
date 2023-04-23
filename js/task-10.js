// Отримуємо посилання на вузли DOM
const inputRef = document.querySelector("#controls input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

// Створюємо функцію для генерації випадкового кольору в форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створюємо функцію для створення колекції елементів
function createBoxes(amount) {
  let boxSize = 30; // Початковий розмір кожного блоку
  let boxes = ""; // Змінна для збереження HTML-коду блоків

  for (let i = 0; i < amount; i++) {
    // Генеруємо випадковий колір для кожного блоку
    const color = getRandomHexColor();

    // Генеруємо HTML-код для нового блоку
    boxes += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${color};"></div>`;

    // Збільшуємо розмір на 10 пікселів для наступного блоку
    boxSize += 10;
  }

  // Додаємо згенерований HTML-код до div#boxes
  boxesRef.insertAdjacentHTML("beforeend", boxes);
}

// Створюємо функцію для очищення колекції елементів
function destroyBoxes() {
  boxesRef.innerHTML = "";
}

// Додаємо обробники подій на кнопки
createBtnRef.addEventListener("click", () => {
  const amount = inputRef.value;
  createBoxes(amount);
});

destroyBtnRef.addEventListener("click", () => {
  destroyBoxes();
});
