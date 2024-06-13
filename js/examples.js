//FOR
// const numbers = [30, 20, 10, 2, 18];

// let result = [];

// for (let num of numbers) {
//   if (num > 10) {
//     result.push(num);
//   }
// }

// console.log("este es el resultado", result);

// //MAP

// const puntos = [5, 9, 8, 4, 6];

// const result2 = puntos.map((punto) => punto);
// console.log(result2);

//Abreviación de nombres

// ["Liz", "LLanos"] ===>  "LL"
const prueba = ["liz", "llanos"];

function withFor(arrayName) {
  let result = [];
  for (let name of arrayName) {
    result.push(name[0]);
  }

  return result.join("");
}

const final = withFor(prueba);
console.log(final);

//======================================
const prueba2 = ["Lucy", "Navarro"];

function withMap(arrayName) {
  return arrayName.map((name) => name[0]).join("");
}

const final2 = withMap(prueba2);
console.log(final2);
