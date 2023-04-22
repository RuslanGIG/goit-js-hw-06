const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  refs.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

refs.createBtn.addEventListener("click", () => {
  const amount = Number(refs.input.value);
  createBoxes(amount);
});

refs.destroyBtn.addEventListener("click", destroyBoxes);
