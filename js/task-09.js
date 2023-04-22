// Получаем доступ к элементам DOM
const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

// Функция, которая меняет цвет фона и выводит его значение
function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorEl.textContent = newColor;
}

// Функция, которая генерирует случайный цвет
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Вешаем обработчик клика на кнопку
changeColorBtn.addEventListener("click", changeBackgroundColor);
