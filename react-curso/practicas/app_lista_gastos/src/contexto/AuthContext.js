// vamos a crear un contexto: 
import React, {useState, useContext, useEffect }from 'react';
import {auth} from './../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

//creamos una variable para crear el primer  el contexto que sera un componente global  
const AuthContext = React.createContext();
//crear un componente padre que va encerrar nuetra app y va  inyectar o insertar 
// el Estado (debemos crear el provider) agregamos un componente y se va a llamar igual 
//y el otro provide va a recibir los hijos 

//HOok para acceder al contexto con esta variable de useAuth vamos acceder al elemento
const useAuth = () =>{
    return useContext (AuthContext);
}
//firebase permite visualizar si el usuario realizo un ingreso o session

const AuthProvider = ({children}) => {
    const [usuario, cambiarUsuario] = useState();
//creamos un state para saber cuando termina de cargar la comprobacionde onAuthStatechange
        const [cargando, cambiarCargando] = useState (true);
 //efecto para ejecutar la comprobacion del usuario una sola vez 
    useEffect(() => {
//comprobamos si hay un usuario con abierta o cerrado la session

      const cancelarSuscripcion = onAuthStateChanged (auth, (usuario) => {
        cambiarUsuario(usuario);
        cambiarCargando(false);

      }); 

       return cancelarSuscripcion;
    }, []);


    return ( 
        <AuthContext.Provider value={{usuario:usuario}}>
            {/* solamente retornamos los elementos hijos cuando no esta cargando.
            de esta forma nos aseguramos de  no cargar el resto de la app hasta que el usuario 
            alla sido restablecido 

            si no hacemos esto al refrescar la pagina el componente childre intendta cargar nuevamente
            antes de a ver comprobado que exite un suario
            */}
            {!cargando && children}
        </AuthContext.Provider>
     );
}
 
export { AuthContext, AuthProvider, useAuth };