function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

function multiplicacion(a, b) {
  return a * b;
}

const message = "Well done!";

function calculatorMessage() {
  console.log("calculando la operación");
}

//import te importa función por función no?
// existe una manera de importar todo un archivo,
//que contiene varias funciones de un saque?
export default calculatorMessage;
export { suma, resta, division, message, multiplicacion };
