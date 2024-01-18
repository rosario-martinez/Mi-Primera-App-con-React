import React from 'react';
import { Helmet } from 'react-helmet';
import  {Header, Titulo, ContenedorHeader, } from './../elementos/Header';
import Boton from './../elementos/Boton'
import {Formulario, Input, InputGrande, ContenedorBoton } from './../elementos/ElementosDeFormulario';
import {ReactComponent as SvgLogin} from './../imagenes/registro.svg';
import styled from 'styled-components';

// quiero definir un componente svg y darle unos estilos peque;os 

const Svg = styled(SvgLogin) `
  width: 100%auto;
  max-height: 6.25rem; /*100px*/
  margin-bottom: 1:25rem; /*20px*/
`;
 

const RegistroUsuarios = () => {
  return (
    <>
      <Helmet>
        <title>Crear Cuenta </title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear Cuenta</Titulo>
          <div>
            <Boton to="/iniciar-sesion">Iniciar Sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario>
        <Svg/>
        <input type="email" name="email" placeholder="Correo Electronico" />
        <input type="password" name="password" placeholder="Contraseña" />
        <input type="password" name="password2" placeholder="Repetir la contraseña"/>
        <ContenedorBoton>
          <Boton as="button" primario type='submit' >Crear Cuenta</Boton> 
        </ContenedorBoton>
        
      </Formulario>
    </>
  );
}

export default RegistroUsuarios;