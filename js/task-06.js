const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const formData = new FormData(event.currentTarget);
  const formObject = {};
  
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  
  if (!formObject.email || !formObject.password) {
    alert('All fields are required!');
    return;
  }
  
  console.log(formObject);
  event.currentTarget.reset();
});