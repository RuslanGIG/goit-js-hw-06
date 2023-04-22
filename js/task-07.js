// Знаходимо наші елементи у DOM за id
const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// Встановлюємо початкове значення розміру тексту
text.style.fontSize = `${inputRange.value}px`;

// Створюємо слухача події 'input' на inputRange
inputRange.addEventListener("input", (event) => {
  // Оновлюємо розмір тексту залежно від значення range
  text.style.fontSize = `${event.target.value}px`;
});
