import React from 'react';
import { Header, Titulo } from "./../elementos/Header";
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
//import {useAuth} from "./../contexto/AuthContext";
import BarraTotalGastado from './BarraTotalGastado';
import useObtenerGastos from '../Hook/useObtenerGastos';

// useAuth va a permiter tomando la variable de usuario de la funcion poder ver si un usuario a comenzado 

const ListaDeGastos = () => {
  const [ gastos] = useObtenerGastos();


    return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>

      <Header>
        <BtnRegresar />
        <Titulo>lista de Gastos </Titulo>
      </Header>
      <BarraTotalGastado/>
    </>
  );
}

export default ListaDeGastos;