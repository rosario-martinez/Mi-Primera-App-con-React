import React, {useState} //sirve para definir estados en la app
 from 'react';
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
 
// estas 3 const de useState son las funciones de los input para establecerlas en la app
//los onchange le colocaremos una funcion porque esta funcion va a recibir los cambios de la app ese parametro 
//se llamara handlechange, creamos la funcion con el mismo nombre de handleChange el cual recibe el parametro (e)
// este parametro (e) es el evento y permite acceder a todos los parametros en este caso su input (correo, constrase;a) 

const RegistroUsuarios = () => {
  const [correo, establecerCorreo] = useState ('');
  const [password, establecerPassword] = useState ('');
  const [password2, establecerPassword2] = useState ('');

  const handleChange = (e) => {
     console.log(e);

  }
   
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
        <input type="email" name="email" placeholder="Correo Electronico"  value={correo} onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña"  value={password} onChange={handleChange}/>
        <input type="password" name="password2" placeholder="Repetir la contraseña" value={password2} onChange={handleChange}/>
        <ContenedorBoton>
          <Boton as="button" primario type='submit' >Crear Cuenta</Boton> 
        </ContenedorBoton>
        
      </Formulario>
    </>
  );
}

export default RegistroUsuarios;