import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
const FormularioTareas = () => {
    return(
        <form action="" className="formulario-tareas">
            <input
            type="text"
            className="formulario-tareas__input"
            placeholder="Escribe una tarea por realizar"
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