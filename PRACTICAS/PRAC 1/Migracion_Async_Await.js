async function obtenerDatosUsuario() {
  try {
    // El código se detiene en cada 'await' hasta que la promesa se resuelve
    const respuesta = await fetch('https://api.ejemplo.com/usuario/1');
    const usuario = await respuesta.json();
    
    console.log("Usuario:", usuario.nombre);
  } catch (error) {
    // Los errores se manejan de forma centralizada con try/catch
    console.error("Error al obtener datos:", error);
  }
}