import React from 'react';
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from '../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import UseObtenerGastosDelMesPorCategoria from '../hooks/useObtenerGastosDelMesPorCategoria';
import {ListaDeCategorias, ElementoListaCategorias, Categoria, Valor} from './../elementos/ElementoDeLista';
import IconoCategoria from './../elementos/IconoCategoria';
import convertirAMoneda from './../funciones/convertirAMoneda'


// en este caso no estamos agregando contenedorHeader porque no agregaremos contenedores de botones 
const GastosPorCategorias = () => {
  const gastosPorCategorias =  UseObtenerGastosDelMesPorCategoria();
  console.log (gastosPorCategorias);

  return (
    <>
      <Helmet>
        <title>Gastos por Categoria </title>
      </Helmet>

      <Header>
        
          <BtnRegresar/>
          <Titulo>Gastos por Categoria</Titulo>
        
      </Header>
    <ListaDeCategorias>
      {gastosPorCategorias.map((elemento, index) => {
        return (
          <ElementoListaCategorias key={index}>
            <Categoria>
              <IconoCategoria id={elemento.categoria}/>
              {elemento.categoria}
            </Categoria>
            <Valor>{convertirAMoneda(elemento.cantidad)}</Valor>
          </ElementoListaCategorias>
         );
      })}
    </ListaDeCategorias>

      
     <BarraTotalGastado/>
    </>
  );
}

export default GastosPorCategorias;