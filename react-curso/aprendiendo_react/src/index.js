import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

const JSX = <h1>Hola Rosario Bienvenida</h1>
// Código nuevo
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {JSX}
  </React.StrictMode>
);
