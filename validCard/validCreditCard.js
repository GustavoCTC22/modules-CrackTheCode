const message = document.querySelector("#message-valid");

function isValidate(creditNumber) {
  const regexPattern = /^45[0-9]{14}$/;
  if (regexPattern.test(creditNumber)) {
    message.textContent = "Es válido";
    message.classList.remove("invalido");
    message.classList.add("valido");
  } else {
    message.textContent = "Es inválido";
    message.classList.remove("valido");
    message.classList.add("invalido");
  }
}

function handleSubmit(event) {
  //prevenía la recarga de la página cuando le das submit

  // 4521264783833980
  event.preventDefault();
  const { creditCard } = event.target.elements;
  isValidate(creditCard.value);
}

function inicio() {
  document
    .querySelector("#form-creditCard")
    .addEventListener("submit", handleSubmit);
}

inicio();
