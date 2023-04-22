const form = document.querySelector(".login-form"); // выбираем форму по классу
form.addEventListener("submit", onSubmit); // добавляем обработчик на отправку формы

function onSubmit(event) {
  event.preventDefault(); // отменяем действие по умолчанию (перезагрузку страницы)

  const {
    elements: { email, password },
  } = event.currentTarget; // получаем доступ к элементам формы

  if (email.value === "" || password.value === "") {
    // проверяем, заполнены ли все поля
    alert("All fields must be filled in!"); // выводим сообщение об ошибке
    return; // прерываем выполнение функции
  }

  const formData = { email: email.value, password: password.value }; // формируем объект с данными формы

  console.log(formData); // выводим объект с данными формы в консоль
  form.reset(); // очищаем форму
}
