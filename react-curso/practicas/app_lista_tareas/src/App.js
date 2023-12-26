import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormulariosTareas";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  //obtenemos las tareas guardadas de localstorage
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  // establecemos el estado de las tareas guardadas .

  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  // el estado de mostrartareascompletadas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas')===null){
    configMostrarCompletadas = true;

  } else{
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas')=== 'True';
  }

  // el estado de mostrartareascompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);



  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />

      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
