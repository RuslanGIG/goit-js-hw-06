// 1. Отримуємо доступ до інпута та спану за допомогою методу querySelector.
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

// 2. Створюємо функцію для оновлення тексту спану.
const updateNameOutput = () => {
  // 3. Отримуємо значення введеного тексту в інпут.
  const inputValue = inputName.value.trim();

  // 4. Перевіряємо, чи є введений текст порожнім.
  if (inputValue === "") {
    // 5. Якщо текст порожній, то встановлюємо текст спану "Anonymous".
    outputName.textContent = "Anonymous";
  } else {
    // 6. Інакше встановлюємо текст спану зі значенням інпуту.
    outputName.textContent = inputValue;
  }
};

// 7. Додаємо слухача події input до інпута.
inputName.addEventListener("input", updateNameOutput);
