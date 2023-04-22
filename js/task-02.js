const ingredientsList = document.querySelector("#ingredients"); // выбираем список ингредиентов по id

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ingredients.push("Test") 
// так можем запушить новый элемент

const ingredientItems = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li"); // создаем новый элемент li
  ingredientItem.textContent = ingredient; // добавляем название ингредиента в текстовый контент элемента
  ingredientItem.classList.add("item"); // добавляем класс item элементу

  return ingredientItem; // возвращаем элемент li
});

ingredientsList.append(...ingredientItems);
