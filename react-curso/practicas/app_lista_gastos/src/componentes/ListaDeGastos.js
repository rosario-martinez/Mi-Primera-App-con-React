import React from 'react';
import { Header, Titulo } from "./../elementos/Header";
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import {useAuth} from "./../contexto/AuthContext";
// useAuth va a permiter tomando la variable de usuario de la funcion poder ver si un usuario a comenzado 



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