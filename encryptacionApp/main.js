function inicio() {
  document
    .querySelector("#input-message")
    .addEventListener("keyup", function () {
      this.value = this.value.toUpperCase();
    });

  document.querySelector("#cifrar").addEventListener("click", function () {
    const texto = document.querySelector("#input-message").value;
    const desplazamiennto = document.querySelector("#desplazamiento").value;
    document.querySelector("#result-message").value = cifrar(
      texto,
      desplazamiennto
    );
  });
  document.querySelector("#descifrar").addEventListener("click", function () {
    const texto = document.querySelector("#input-message").value;
    const desplazamiennto = document.querySelector("#desplazamiento").value;
    descifrar(texto, desplazamiennto);
  });
}

function cifrar(texto, desplazamiento) {
  let result = "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  desplazamiento = ((desplazamiento % 26) + 26) % 26;

  //Si no está vacío
  if (texto) {
    for (let i = 0; i < texto.length; i++) {
      //validamos que este dentro de las cadena de letras
      if (letras.indexOf(texto[i]) != -1) {
        let posicion = (letras.indexOf(texto[i]) + desplazamiento) % 26;
        result += letras[posicion];
      } else {
        result += texto[i];
      }
    }
  }
  return result;
}

//Segunda forma
function cifrar2(texto, desplazamiento) {
  if (!texto) return;
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = ((desplazamiento % 26) + 26) % 26;

  return texto.replace(
    /[A-Z]/gi,
    (c) => letras[(letras.indexOf(c) + desplazamiento) % 26]
  );
}

function descifrar(texto, desplazamiento) {
  if (!texto) return;
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = ((desplazamiento % 26) - 26) % 26;

  return texto.replace(
    /[A-Z]/gi,
    (c) => letras[(letras.indexOf(c) - desplazamiento) % 26]
  );
}

inicio();
