// PARA COMPLETAR LOS COMANDOS

// LISTADO DE OBJETOS QUE UTILIZAMOS PARA LOS COMANDOS
const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de tarea por hacer",
};
const completado = {
  default: true,
  alias: "c",
  desc: "Marca como completado o pendiente la tarea",
};
//FUNCIONES QUE DEVUELVEN LOS COMANDO
const argv = require("yargs")
  //aqui pasamos argumentps
  .command("crear", "Crear una tarea por hacer", {
    descripcion
  })
  .command("actualizar", "Actualiza una tarea por hacer", {
    descripcion,
    completado
  })
  .command("borrar", "Borra una tarea", {
    descripcion
  })
  .help().argv; //muestra la ayuda

module.exports = {
  argv,
};
