import { suma, message, resta, division } from "./js/operators.js";

import { multiplicacion as multi } from "./js/operators.js";

import calculatorMessage from "./js/operators.js";

console.log(suma(15, 30));
console.log(resta(15, 30));
console.log(division(15, 30));
console.log(multi(15, 30));
calculatorMessage();

const imagenPizza = "./assets/images/pizza-img.jpg";

const container = document.querySelector("#content");

const template = `
  <p>agregando imagen con import</p>
  <img src="${imagenPizza}/>
`;

container.innerHTML = template;
