import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormulariosTareas";

const App = () => {
  const [tareas, cambiarTareas] = useState([
    {
      id: 1,
      texto: "Diario de emociones y sentimientos",
      completada: false,
    },
    {
      id: 2,
      texto: "Escribir Mensajes Biblicos de Motivacion ",
      completada: false,
    },
  
  ]);

  console.log(tareas);

  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </div>
  );
};

export default App;
