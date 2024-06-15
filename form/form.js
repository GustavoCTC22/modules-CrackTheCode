const form = document.querySelector("#form-newUser");

function handleSubmit(event) {
  event.preventDefault(); //Previene la recarga de la página
  const { username, email, password } = event.target.elements;

  const data = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  console.log(data);
}

form.addEventListener("submit", handleSubmit);
