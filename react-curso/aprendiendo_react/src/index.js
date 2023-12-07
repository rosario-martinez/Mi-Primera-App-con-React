import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Usuario from "./componentes/Usuario";
// import ContadorClass from './componentes/ContadorClass';
import "./index.css";
import ContadorFuncional from "./componentes/ContadorFuncional";
import FormularioInicioSesion from "./componentes/FormularioInicioSesion";
import Boton from "./elementos/Boton";
import  EjemploUseReducer  from "./componentes/EjemploUseReducer";
import Blog from "./componentes/blog";


const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);

  return (
    <div className="contenedor">
      {sesion === true ? (
        <div>
          <Usuario />
          <Blog/>
          <EjemploUseReducer />
          {/*<ContadorFuncional
            cantidadAIncrementar={20}
            cantidadADisminuir={20}
          />
          {/*<ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2} />*/}
          {/*<button onClick={() => cambiarEstadoSesion(false)}>
            
      </button>*/}

          <Boton largo marginTop onClick={() => cambiarEstadoSesion(false)}>
            Cerrar Sesión
          </Boton>
        </div>
      ) : (
        <div>
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
