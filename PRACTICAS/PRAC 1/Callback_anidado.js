obtenerUsuario(id, (user) => {
  obtenerPosts(user.id, (posts) => {
    console.log(posts);
  });
});