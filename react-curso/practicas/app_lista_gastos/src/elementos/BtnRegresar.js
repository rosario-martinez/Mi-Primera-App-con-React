import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconoFlecha} from './../imagenes/flecha.svg'; 
import { useNavigate } from 'react-router-dom'; //useNavigate permite navegar estre paginas 



/*btn es un boton especial que estamos colocando para regresar 
tambien estamos estableciendo los tama*os de acuerdo a donde estes viendo la app */

const Btn = styled.button`
  display: block;
  width: 3.12rem; /* 50px */
  height: 3.12rem; /* 50px */
  line-height: 3.12rem; /* 50px */
  text-align: center;
  margin-right: 1.25rem; /* 20px */
  border: none;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.31rem; /* 5px */
  cursor: pointer;

  @media (max-width: 60rem) {
    /* 950px */
    width: 2.5rem; /* 40px */
    height: 2.5rem; /* 40px */
    line-height: 2.5rem; /* 40px */
  }
`;

const Icono = styled(IconoFlecha)`
  width: 50%;
  height: auto;
  fill: #fff;
`;


//agregamos funcionalidad al boton btn regresar 
//podemos agregar el parametro de ruta a la const para regresar a la ruta anterior 

const BtnRegresar = ({ruta = '/'}) => {
    const navigate = useNavigate();
  return (
    <Btn onClick={() => navigate(ruta)}><Icono/></Btn>
  );
}



export default BtnRegresar;
