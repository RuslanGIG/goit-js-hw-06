// Отримуємо доступ до інпуту та зберігаємо його в змінну
const validationInput = document.querySelector("#validation-input");

// Отримуємо довжину символів, яку повинен містити інпут
const expectedLength = validationInput.dataset.length;

// Функція, яка буде виконуватись при втраті інпутом фокусу
function handleBlur() {
  // Отримуємо вміст інпуту та зберігаємо його в змінну
  const inputValue = validationInput.value;

  // Перевіряємо довжину введеного тексту та порівнюємо її з очікуваною довжиною
  if (inputValue.length === +expectedLength) {
    // Якщо довжина введеного тексту співпадає з очікуваною, то додаємо клас valid та видаляємо клас invalid
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    // Якщо довжина введеного тексту не співпадає з очікуваною, то додаємо клас invalid та видаляємо клас valid
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}

// Додаємо обробник події blur до інпуту
validationInput.addEventListener("blur", handleBlur);
