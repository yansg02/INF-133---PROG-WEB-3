function login() {
  autenticar().then(res => {
    cargarPerfil(res.token).then(perfil => {
      console.log(perfil);
    });
  });
}