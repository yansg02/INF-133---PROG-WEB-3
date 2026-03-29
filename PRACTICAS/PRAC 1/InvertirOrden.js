function miFuncion(cadena) {
  let resultado = "";

  for (let i = cadena.length - 1; i >= 0; i--) {
    resultado += cadena[i];
  }

  return resultado;
}

// Ejemplo
console.log(miFuncion("abcd"));  //dcba