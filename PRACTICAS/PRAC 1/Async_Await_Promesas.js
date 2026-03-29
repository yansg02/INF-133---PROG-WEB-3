async function login() {
  const res = await autenticar();
  const perfil = await cargarPerfil(res.token);
  console.log(perfil);
}