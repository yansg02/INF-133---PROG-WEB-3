function miFuncion(cadena) {
  let invertida = "";

  for (let i = cadena.length - 1; i >= 0; i--) {
    invertida += cadena[i];
  }

  if (cadena === invertida) {
    return true;
  } else {
    return false;
  }
}

// Ejemplos
console.log(miFuncion("oruro")); // true
console.log(miFuncion("hola"));  // false