import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

const nombre = "Rosario";
const color = "fuchsia";
const sesion = true; // Define y establece el valor de sesion
const pais = "Venezuela";
const amigos = ["Fanny", "Delcis", "Josneli", "Rut", "Pedro"];

const Usuario = () => {
  return (
    <div>
      <h1 className="titulo" style={{ color: color }}>
        Hola {nombre} Bienvenida
      </h1>
      <p>Te deseo el mejor día para hoy, porque eres su hija amada</p>
      {pais && (
        <p>Tu eres de {pais} de donde nacen las mujeres más bellas del MUNDO</p>
      )}
      <p>Tu lista de amigos </p>
      <ul>
        {amigos.map((amigo, index) => (
          <li key={index}>{amigo}</li>
        ))}
      </ul>
      <p>que tengas un BUEN DIA</p>
    </div>
  );
};

const App = () => {
  return (
    <div>{sesion === true ? <Usuario /> : <p>No has iniciado sesión</p>}</div>
  );
};

// Código nuevo
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



//esta es la forma de TRABAJAR CON FUNCIONES
///const verificarSesion = () => {
//if (sesion === true)
// {return JSX}
//else {return<h1>No has iniciado sesion</h1>}

// Código nuevo
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<React.StrictMode>{verificarSesion()}</React.StrictMode>);
