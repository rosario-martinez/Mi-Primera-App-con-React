import React from 'react';
import {useAuth} from './../contexto/AuthContext';
import {Navigate} from 'react-router-dom';

//nuestros componentes de rutas protegidas toma los componente de hijos que pasamos en index 
//en rutas protegidas y solo toma el componente si el usuario inicia sesion 
const RutaProtegida = ({children}) => {
   const {usuario} =  useAuth();

   if(usuario){
    return children;
   } else {
    return <Navigate replace to = "/iniciar-sesion"/>
   }
}
 
export default RutaProtegida;