const miPromesa = Promise.resolve("Hola");

function promesaACallback(callback) {
  miPromesa
    .then(res => callback(null, res))
    .catch(err => callback(err));
}

promesaACallback((err, data) => console.log(data));