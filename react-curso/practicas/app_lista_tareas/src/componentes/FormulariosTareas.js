import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

const FormularioTareas = ({tareas, cambiarTareas}) => {
    const [inputTarea, cambiarInputTareas] = useState('');
    
    const handleInput = (e) => {
        cambiarInputTareas(e.target.value);
    } 
    const handleSubmit= (e) =>{
        e.preventdefault();

        cambiarTareas([
          ...tareas,
          {
            id: uuidv4 (),
            Text: "inputTarea",
            completada: false,
          },
        ]);
    }

    return(
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input
            type="text"
            className="formulario-tareas__input"
            placeholder="Escribe una tarea por realizar"
            value={inputTarea}
            onChange={(e) => handleInput(e)}
            />
        <button
            type= "text"
            className="formulario-tarea__btn"

        >
            <FontAwesomeIcon 
            icon={faFolderPlus} 
            className="formulario-tareas__icono-btn"
            />
        </button>
        </form>
    );
}

export default FormularioTareas;