// LOGICA DE TAREAS POR HACER

//requerimos fs para escribir archivos
const fs = require("fs");
const { string } = require("yargs");

// guarda las tareas en un arreglo
let listadoPorHacer = [];
// crea la tarea y toma una descripcion como parametro

//guardar en nuestra base de datos
const guardarDb = () => {
  //convierte los datos guardados en formato json
  let data = JSON.stringify(listadoPorHacer);
  //inyecta los datos guardados en el documento .json
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw new Error("No se pudo guardar", err);
  });
};

// lee el archivo para listar las tareas mas adelante
const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crear = (descripcion) => {
  //cargar la bd
  cargarDB();

  //captura las propiedades de la tarea
  let porHacer = {
    descripcion,
    completado: false,
  };
  //inyecta la información de la tarea
  listadoPorHacer.push(porHacer);
  guardarDb(); //ejecuta la funcion
  return porHacer;
};

// LISTA LAS TAREAS
const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

// ACTUALIZA EL ESTADO DE UNA TAREA
const actualizar = (descripcion, completado = true) => {
  cargarDB();
  //busca dentro del arreglo
  let index = listadoPorHacer.findIndex((tarea) => {
    //retorna nuestra tarea actualizada
    return tarea.descripcion === descripcion;
  });
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDb();
    return true;
  } else {
    return false;
  }
};

// BORRA UNA TAREA
const borrar = (descripcion) => {
  cargarDB();
  // CUANDO LO BORRA SOLAMENTE EXCLUYE LA TAREA DEL LISTADO
  let nuevoListado = listadoPorHacer.filter(tarea => {
    return tarea.descripcion !== descripcion;
  });
  if(listadoPorHacer.length === nuevoListado.length){
    console.log("No se pudo borrar la tarea");
    return false;
  }else{
    listadoPorHacer = nuevoListado;
    guardarDb();
    return true;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};
