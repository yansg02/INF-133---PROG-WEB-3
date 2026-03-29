function ejecutarCallback(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

ejecutarCallback(() => console.log("Callback ejecutado tras 2 segundos"));