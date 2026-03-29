function miFuncion(arr) {
  let resultado = { 
        pares: [],
        impares: [] };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      resultado.pares.push(arr[i]);
    } else {
      resultado.impares.push(arr[i]);
    }
  }

  return resultado;
}

// Ejemplo
console.log(miFuncion([1,2,3,4,5]));