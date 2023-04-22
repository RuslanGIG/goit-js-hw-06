const widget = document.querySelector(".widget");
const colorText = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  widget.style.backgroundColor = color;
  colorText.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}