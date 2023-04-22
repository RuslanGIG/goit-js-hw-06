// Отримуємо доступ до інпуту
const input = document.querySelector("#validation-input");

// Отримуємо правильну кількість символів з атрибуту data-length інпуту
const validLength = input.dataset.length;

// Створюємо слухача події "blur" на інпуті
input.addEventListener("blur", handleInputBlur);

// Функція, яка викликається при втраті фокусу на інпуті
function handleInputBlur(event) {
  const valueLength = event.target.value.length;

  // Перевіряємо, чи введено коректну кількість символів
  if (valueLength === Number(validLength)) {
    input.classList.add("valid"); // Додаємо клас 'valid' для стилізації зеленим бордером
    input.classList.remove("invalid"); // Видаляємо клас 'invalid', якщо він був доданий раніше
  } else {
    input.classList.add("invalid"); // Додаємо клас 'invalid' для стилізації червоним бордером
    input.classList.remove("valid"); // Видаляємо клас 'valid', якщо він був доданий раніше
  }
}
