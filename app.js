const colors = require("colors");
const { actualizar } = require("./por-hacer/por-hacer");
// APLICACION DE TAREAS POR HACER
const argv = require("./config/yargs").argv;
// REQUIERE LA LOGICA QUE CREA LA TAREA
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    let listado = porHacer.getListado();
    for (let tarea of listado) {
      console.log("========Por Hacer=========".brightBlue);
      console.log(tarea.descripcion.brightMagenta);
      console.log(`Estado: ${tarea.completado}`.brightCyan);
      console.log("==========================".brightBlue);
    }
    break;
  case "actualizar":
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case "borrar":
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado)
    break;
  default:
    console.log("comando no válido");
}
