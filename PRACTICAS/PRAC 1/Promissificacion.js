// Función original basada en callback
function saludar(nombre, callback) {
  setTimeout(() => callback(`Hola ${nombre}`), 1000);
}

// Conversión a Promesa
const saludarPromesa = (nombre) => {
  return new Promise((resolve) => {
    saludar(nombre, (resultado) => {
      resolve(resultado);
    });
  });
};

saludarPromesa("Luis").then(console.log);