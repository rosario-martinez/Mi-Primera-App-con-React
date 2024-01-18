import React from 'react';
import { Header, Titulo } from "./../elementos/Header";
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";


const ListaDeGastos = () => {
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>

      <Header>
        <BtnRegresar />
        <Titulo>lista de Gastos </Titulo>
      </Header>
    </>
  );
}

export default ListaDeGastos;