import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './elementos/Header';
import Boton from './elementos/Boton';


// el contenedorde Header se utilizaba en este caso porque necesitabamos agregar titulo y contenedor  botones 
const App = () => {
  return (
    <>
      <Helmet>
        <title>Agregar Gastos </title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gastos</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categoria</Boton>
            <Boton to="/lista">Lista de Gastos</Boton>
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
}

export default App;

  