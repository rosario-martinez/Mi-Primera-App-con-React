import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "./../elementos/Header";
import Boton from "./../elementos/Boton";
import {
  Formulario,
  Input,
  InputGrande,
  ContenedorBoton,
} from "./../elementos/ElementosDeFormulario";
import { ReactComponent as SvgLogin } from "./../imagenes/login.svg";
import styled from "styled-components";

// quiero definir un componente svg y darle unos estilos peque;os

const Svg = styled(SvgLogin)`
  width: 100%auto;
  max-height: 12.5rem; /*200px*/
  margin-bottom: 1:25rem; /*20px*/
`;

const InicioSesion = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar Sesion </title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar Sesion</Titulo>
          <div>
            <Boton to="/crear-cuenta">Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario>
        <Svg />
        <input type="email" name="email" placeholder="Correo Electronico" />
        <input type="password" name="password" placeholder="Contraseña" />
        
        <ContenedorBoton>
          <Boton as="button" primario type="submit">
            Iniciar Sesion
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

export default InicioSesion;
