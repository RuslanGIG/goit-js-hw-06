const galleryList = document.querySelector('.gallery'); // получаем ссылку на список
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryMarkup = createGalleryMarkup(images); // вызываем функцию для создания разметки галереи
galleryList.insertAdjacentHTML('beforeend', galleryMarkup); // вставляем полученную разметку в список

function createGalleryMarkup(images) { // функция для создания разметки галереи на основе массива объектов
  return images.map(({ url, alt }) => { // используем деструктуризацию объекта в параметре функции map
    return `
      <li class="gallery__item">
        <img class="gallery__image" src="${url}" alt="${alt}">
      </li>
    `;
  }).join(''); // преобразуем массив строк в одну строку
}