const formElem = document.querySelector('.login-form')



formElem.addEventListener ('submit', (event) => {
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
}
const object = {
    email: `${email.value}`,
    password: `${password.value}`
}

console.log(object);
formElem.reset();
})