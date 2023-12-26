import React from "react";
import Tarea from './Tarea';



const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas}) => {
    //console.log("desde tareas", tareas)
    const toggleCompletada = (id) => {
      console.log('Estamos editando la tarea con id', id );
      cambiarTareas(tareas.map( (tarea) => { 
        if (tarea.id === id){
          return { ...tarea, completada: !tarea.completada}
        }
          return tarea;
      }));

    }

    const editarTarea = (id, nuevoTexto) => {
      
      cambiarTareas(
        tareas.map((tarea) => {
          if (tarea.id === id) {
            return { ...tarea, texto : nuevoTexto };
          }
          return tarea;
        })
      );
    };

    const borrarTarea = (id) => {

      cambiarTareas(
        tareas.filter((tarea) => {
          if (tarea.id !== id) {
            return tarea;
          }
          return null;
        }));
    }


  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ?
        tareas.map((tarea) => { 
          if(mostrarCompletadas){
            return <Tarea 
                          key = {tarea.id}
                           tarea = {tarea}
                           toggleCompletada = {toggleCompletada}
                           editarTarea = {editarTarea}
                           borrarTarea = {borrarTarea}
                          />      
          } 

          //si las tareas no esta completada, la devolvemos.
          else if(!tarea.completada) {
            return <Tarea 
                          key = {tarea.id}
                           tarea = {tarea}
                           toggleCompletada = {toggleCompletada}
                           editarTarea = {editarTarea}
                           borrarTarea = {borrarTarea}
                          />      
            //si ya esta completada no la devolvemos
          }
          return null; 
          
        })
        : <div className="lista-tareas__mensaje">No hay Tareas Agregadas</div>
        }
    </ul>
  );
};
export default ListaTareas;
