// знаходимо потрібні елементи DOM та зберігаємо їх у змінних
const counter = document.querySelector("#counter");
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');
const valueEl = counter.querySelector("#value");

// ініціалізуємо початкове значення лічильника
let counterValue = 0;

// створюємо функцію, яка оновлює значення лічильника та відображає його на сторінці
function updateCounterValue() {
  valueEl.textContent = counterValue;
}

// створюємо слухачів кліків для кнопок збільшення та зменшення значення лічильника
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});
