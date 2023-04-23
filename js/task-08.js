const form = document.querySelector(".login-form"); // знаходимо форму за класом
form.addEventListener("submit", onSubmit); // встановлюємо обробник події submit на форму

function onSubmit(event) {
  // функція-обробник події submit
  event.preventDefault(); // відмінюємо перезавантаження сторінки при відправці форми

  const { elements } = event.currentTarget; // отримуємо доступ до елементів форми через властивість elements

  const email = elements.email.value; // отримуємо значення поля email
  const password = elements.password.value; // отримуємо значення поля password

  if (email === "" || password === "") {
    // перевіряємо, чи заповнені всі поля
    alert("All fields must be filled in!"); // виводимо повідомлення, якщо не заповнені всі поля
    return;
  }

  const formData = { email, password }; // формуємо об'єкт з даними форми

  console.log(formData); // виводимо об'єкт з даними в консоль
  form.reset(); // очищуємо значення полів форми методом reset
}
