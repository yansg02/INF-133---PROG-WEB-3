const miPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("¡Éxito después de 3 segundos!");
  }, 3000);
});

miPromesa.then(mensaje => console.log(mensaje));