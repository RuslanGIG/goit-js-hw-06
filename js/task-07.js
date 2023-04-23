// 1. Знаходимо наші елементи в DOM та зберігаємо їх в змінні
const inputFontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

// 2. Встановлюємо прослуховувач події 'input' на інпуті inputFontSizeControl
inputFontSizeControl.addEventListener("input", onFontSizeControlInputChange);

// 3. Оголошуємо функцію-обробник події 'input'
function onFontSizeControlInputChange(event) {
  // 4. Отримуємо значення inputFontSizeControl та приводимо його до числового типу
  const fontSize = Number(event.target.value);

  // 5. Встановлюємо отримане значення font-size для елементу spanText
  spanText.style.fontSize = `${fontSize}px`;
}
