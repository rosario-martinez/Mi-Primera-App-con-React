import React, { useState } from "react"; //sirve para definir estados en la app
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader } from "./../elementos/Header";
import Boton from "./../elementos/Boton";
import {Formulario, Input, InputGrande, ContenedorBoton} from "./../elementos/ElementosDeFormulario";
import { ReactComponent as SvgLogin } from "./../imagenes/registro.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase/firebaseConfig";
import Alerta from "./../elementos/Alerta";



// quiero definir un componente svg y darle unos estilos peque;os

const Svg = styled(SvgLogin)`
  width: 100%auto;
  max-height: 6.25rem; /*100px*/
  margin-bottom: 1:25rem; /*20px*/
`;

// estas 3 const de useState son las funciones de los input para establecerlas en la app
//los onchange le colocaremos una funcion porque esta funcion va a recibir los cambios de la app ese parametro
//se llamara handlechange, creamos la funcion con el mismo nombre de handleChange el cual recibe el parametro (e)
// este parametro (e) es el evento y permite acceder a todos los parametros en este caso su input (correo, constrase;a)

const RegistroUsuarios = () => {
  const navigate = useNavigate();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [password2, establecerPassword2] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState (false);
  const [alerta, cambiarAlerta] = useState ({});


  /*con switch estamos ejecutando una funcion que aplica cuando hay cambios */
  const handleChange = (e) => {
    
    switch (e.target.name) {
      case "email":
        establecerCorreo(
          e.target.value
        ); /* De esta forma estamos ejecutando los cambios del input de los tres */
        break; /*el break no lo podemos olvidar ya que asi la finalizacion del codigo  */
      case "password":
        establecerPassword(e.target.value);
        break;
      case "password2":
        establecerPassword2(e.target.value);
        break;
      default:
        break;
    }
  };
  /*el evento del submit es (e) atravez de esta funcion y sus parametros queremos hacer una validacion
    de los valores que se coloquen en crear cuentas sean correcto  */

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    cambiarEstadoAlerta(true);
    cambiarAlerta({});

    //Comprobamos del lado del cliente que el correo sea valido
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    
    //esta es una formula para ver si conside con el correo vamos a colocar los condicionales de nuestra funcion
    if (!expresionRegular.test(correo)) {
      // el signo (!) significa = sino es un (correo) quiero que
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: 'error',
        mensaje: 'por favor ingresar datos '
      });
      return;
    }

    if (correo === '' || password === '' || password2 === '') {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "por favor rellena los datos"
      });
      return; //si no cumple ninguna de esta funcion salimos gracias a return y probamos la otra funcion
    }

    if (password !== password2) {
      
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "las contraseñas no son iguales  "
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, correo, password); //aqui termina la funcion con await
      navigate("/");
    } catch (error) {
      cambiarEstadoAlerta(true);

      let mensaje;
      switch (error.code) {
        case "auth/invalid-password":
          mensaje = "La contraseña tiene que ser de al menos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          mensaje =
            "Ya existe una cuenta con el correo electrónico proporcionado.";
          break;
        case "auth/invalid-email":
          mensaje = "El correo electrónico no es válido.";
          break;
        default:
          mensaje = "Hubo un error al intentar crear la cuenta.";
          break;
      }

      cambiarAlerta({tipo: 'error', mensaje: mensaje})
    }
    
   
  };


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

       <Formulario onSubmit={handleSubmit}>
         <Svg />
         <Input
           type="email"
           name="email"
           placeholder="Correo Electronico"
           value={correo}
           onChange={handleChange}
         />

         <Input
           type="password"
           name="password"
           placeholder="Contraseña"
           value={password}
           onChange={handleChange}
         />

         <Input
           type="password"
           name="password2"
           placeholder="Repetir la contraseña"
           value={password2}
           onChange={handleChange}
         />

         <ContenedorBoton>
           <Boton
             as="button"
             primario="true"
             type="submit"
           >
             Crear Cuenta
           </Boton>
         </ContenedorBoton>
       </Formulario>

       <Alerta
       tipo ={alerta.tipo}
       mensaje={alerta.mensaje}
       estadoAlerta={estadoAlerta}
       cambiarEstadoAlerta={cambiarEstadoAlerta}
       />

       
     </>
   );
};

export default RegistroUsuarios;
