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
import { AuthProvider } from "./contexto/AuthContext";
import RutaPrivada from "./componentes/RutaPrivada";
import { TotalGastadoProvider } from "./contexto/TotalGastadoEnElMesContext";





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
        <link rel="shortcut icon" href={favicon} type="image/x-icon"></link>
      </Helmet>

      <AuthProvider>
        <TotalGastadoProvider>

          <BrowserRouter>
                <Contenedor>
                  <Routes>
                  {/*estas son las rutas publicas que se pueden ver al entrar a la app */}
                  <Route path="/iniciar-sesion" element={<InicioSesion />} />
                  <Route path="/crear-cuenta" element={<RegistroUsuarios />} />
                  {/*estas son las rutas privadas  que estaran ocultas en el usuario que no esta adentro de app */}
                  
                  <Route path = "/categorias" element ={
                    <RutaPrivada>
                      <GastosPorCategorias/>
                    </RutaPrivada>  
                  }/>

                  <Route path = "/lista" element = {
                  <RutaPrivada>
                    <ListaDeGastos />
                  </RutaPrivada>
                  }/>
                  
                    <Route path = "/editar/:id" element ={
                      <RutaPrivada>
                        <EditarGastos />
                      </RutaPrivada>
                    }/>

                  <Route path="/" element ={
                    <RutaPrivada >
                    <App />
                  </RutaPrivada>
                  }/>
                  
                </Routes>
              </Contenedor>
          </BrowserRouter>

        </TotalGastadoProvider>
        
      </AuthProvider>

      <Fondo />
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
