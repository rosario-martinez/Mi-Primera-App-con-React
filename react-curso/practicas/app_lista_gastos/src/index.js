import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import Contenedor from "./elementos/Contenedor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditarGastos from "./componentes/EditarGastos";
import GastosPorCategorias from "./componentes/GastosPorCategorias";
import InicioSesion from "./componentes/InicioSesion";
import ListaDeGastos from "./componentes/ListaDeGastos";
import RegistroUsuarios from "./componentes/RegistroUsuarios";
import { Helmet } from "react-helmet";
import favicon from './imagenes/logo.png';
import Fondo from "./elementos/Fondo";


WebFont.load({
  google: {
    families: ["Work Sans: 400,500,700", "sans-serif"],
  },
});

const Index = () => {
  return (
    /* yo deberia agregar un div o contenedor pero si hago eso tendre problemas */
    /* por eso debemos agregar fracmentos ejemplo: <> </>*/
    /*La biblioteca react-helmet proporciona un componente
     llamado Helmet que puedes utilizar para cambiar dinámicamente el contenido del encabezado
     HTML en función del estado de tu aplicación React.*/
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/iniciar-sesion" element={<InicioSesion />} />
            <Route path="/crear-cuenta" element={<RegistroUsuarios />} />
            <Route path="/editar/:id" element={<EditarGastos />} />
            <Route path="/lista" element={<ListaDeGastos />} />
            <Route path="/categorias" element={<GastosPorCategorias />} />
          </Routes>
        </Contenedor>
      </BrowserRouter>
      <Fondo/>
    </>
  );
};

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Index />, rootElement);

//esta es la ultima version de react
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Index />);

//ReactDOM.createRoot(<Index />, document.getElementById('root'));
