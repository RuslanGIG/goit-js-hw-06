const categoriesList = document.querySelector("#categories"); // выбираем список категорий по id

const categoriesItems = categoriesList.querySelectorAll(".item"); // выбираем все элементы li.item в списке категорий

console.log(`Number of categories: ${categoriesItems.length}`); // выводим количество категорий

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent; // получаем название категории
  const categoryElements = item.querySelectorAll("li").length; // получаем количество элементов категории

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
