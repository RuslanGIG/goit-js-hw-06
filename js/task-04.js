const counter = document.getElementById("counter");
const counterValue = document.getElementById("value");

let value = 0;

function increment() {
  value += 1;
  counterValue.textContent = value;
}

function decrement() {
  value -= 1;
  counterValue.textContent = value;
}

counter.addEventListener("click", (event) => {
  if (event.target.dataset.action === "increment") {
    increment();
  } else if (event.target.dataset.action === "decrement") {
    decrement();
  }
});
