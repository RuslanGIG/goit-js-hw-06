const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

for (const item of categoriesItems) {
  const title = item.firstElementChild.textContent;
  const elementsCount = item.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
}
