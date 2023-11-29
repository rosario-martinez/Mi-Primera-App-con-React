import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Usuario from "./componentes/Usuario";
import FormularioInicioSesion from "./componentes/FormularioInicioSesion";
import ContadorClass from './componentes/ContadorClass';
import './index.css';





const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(false);

  const cerrarSesion = () => {
  cambiarEstadoSesion(false);
  };

  const iniciarSesion = () => {
    cambiarEstadoSesion(true);
  };

  return (
    <div className="contenedor">
      {sesion === true ? (
        <div>
          <Usuario />
          <ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2} />
          <button onClick={() => cambiarEstadoSesion(false)}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "hsl(120, 100%, 50%)" }}>
            No has iniciado sesión
          </h2>
          <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
          {/*<button
            onClick={iniciarSesion}
            style={{ backgroundColor: "hsl(120, 40%, 70%)" }}
          >
            Iniciar Sesión
          </button>  */}
        </div>
      )}
    </div>
  );
};

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
