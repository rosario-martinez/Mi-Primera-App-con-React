import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "./../elementos/Header";
import Boton from "./../elementos/Boton";
import {Formulario, Input, InputGrande, ContenedorBoton} from "./../elementos/ElementosDeFormulario";
import { ReactComponent as SvgLogin } from "./../imagenes/login.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import Alerta from "./../elementos/Alerta";


// quiero definir un componente svg y darle unos estilos peque;os

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /*200px*/
  margin-bottom: 1:25rem; /*20px*/
`;

const InicioSesion = () => {
  const navigate = useNavigate();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    if( e.target.name === 'email'){
      establecerCorreo(e.target.value);
    } else if (e.target.name === 'password') {
      establecerPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarEstadoAlerta(false);
    cambiarAlerta({});

    //Comprobamos del lado del cliente que el correo sea valido
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    //esta es una formula para ver si conside con el correo vamos a colocar los condicionales de nuestra funcion
    if (!expresionRegular.test(correo)) {
      // el signo (!) significa = sino es un (correo) quiero que
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "por favor ingresar datos ",
      });
      return;
    }

    if (correo === "" || password === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "por favor rellena los datos",
      });
      return; //si no cumple ninguna de esta funcion salimos gracias a return y probamos la otra funcion
    }

    try {
      await signInWithEmailAndPassword(auth, correo, password); //aqui termina la funcion con await
      navigate("/");
    } catch (error) {
      cambiarEstadoAlerta(true);

      let mensaje;
      switch (error.code) {
        case "auth/wrong-password":
          mensaje = "la contrase;a no es la misma";
          break;
        case "auth/user-not-found":
          mensaje = "no se encontro ninguna cuenta con este correo electronico";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }

      cambiarAlerta({ tipo: "error", mensaje: mensaje });
    }
  };

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

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          value={correo}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />

        <ContenedorBoton>
          <Boton 
          as="button" 
          primario= "true"
          type="submit">
            Iniciar Sesion
          </Boton>
        </ContenedorBoton>
      </Formulario>

      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      
      />
        
    </>
  );
};

export default InicioSesion;
