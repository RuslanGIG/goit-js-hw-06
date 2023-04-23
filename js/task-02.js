// отримуємо доступ до списку <ul> по його id
const ingredientsList = document.querySelector("#ingredients");

// масив рядків з назвами інгредієнтів
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// створюємо новий елемент <li> для кожного інгредієнту в масиві
const items = ingredients.map((ingredient) => {
  // створюємо новий елемент <li>
  const item = document.createElement("li");
  // додаємо клас до створеного елементу
  item.classList.add("item");
  // додаємо текстовий вміст до створеного елементу
  item.textContent = ingredient;
  // повертаємо створений елемент <li> для додавання його в масив
  return item;
});

// додаємо всі створені елементи <li> в список <ul> за одну операцію
ingredientsList.append(...items);
