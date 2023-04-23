// Знаходимо кнопку і додаємо обробник події на клік
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", changeBackgroundColor);

// Знаходимо span, в який будемо виводити кольори
const colorSpan = document.querySelector(".color");

function changeBackgroundColor() {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо кольор фону body
  document.body.style.backgroundColor = randomColor;

  // Виводимо значення кольору в span
  colorSpan.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
