// Получаем ссылки на элементы DOM
const counter = document.querySelector("#counter");
const valueEl = counter.querySelector("#value");
const incrementBtn = counter.querySelector("[data-action='increment']");
const decrementBtn = counter.querySelector("[data-action='decrement']");

// Инициализируем значение счетчика
let counterValue = 0;

// Функция обработки клика на кнопке увеличения счетчика
const onIncrementBtnClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

// Функция обработки клика на кнопке уменьшения счетчика
const onDecrementBtnClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

// Добавляем слушатели событий на кнопки
incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);
