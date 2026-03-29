const obtenerDatos = () => Promise.resolve("Datos obtenidos");

obtenerDatos()
  .then(resultado => {
    console.log(resultado);
    return "Procesando..."; // Pasa este valor al siguiente .then
  })
  .then(paso2 => console.log(paso2))
  .catch(err => console.error(err));