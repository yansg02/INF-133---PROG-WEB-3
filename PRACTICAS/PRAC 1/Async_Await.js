async function mostrarPosts(id) {
  const user = await obtenerUsuario(id);
  const posts = await obtenerPosts(user.id);
  console.log(posts);
}