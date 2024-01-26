import React from 'react';
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from '../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';

// en este caso no estamos agregando contenedorHeader porque no agregaremos contenedores de botones 
const GastosPorCategorias = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por Categoria </title>
      </Helmet>

      <Header>
        
          <BtnRegresar/>
          <Titulo>Gastos por Categoria</Titulo>
        
      </Header>
      <BarraTotalGastado/>
    </>
  );
}

export default GastosPorCategorias;