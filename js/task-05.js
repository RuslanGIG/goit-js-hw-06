const inputName = document.querySelector("#name-input"); // Знаходимо інпут за id
const outputName = document.querySelector("#name-output"); // Знаходимо span за id

inputName.addEventListener("input", handleInputName); // Встановлюємо слухача події input на інпут

function handleInputName(event) {
  // Функція, яка обробляє подію input на інпуті
  const currentName = event.currentTarget.value; // Отримуємо поточне значення інпуту

  if (currentName.trim() === "") {
    // Перевіряємо, чи інпут порожній
    outputName.textContent = "Anonymous"; // Якщо інпут порожній, встановлюємо в спан значення "Anonymous"
  } else {
    outputName.textContent = currentName; // Якщо в інпуті є текст, встановлюємо його в спан
  }
}
