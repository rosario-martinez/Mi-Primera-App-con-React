// vamos a crear un contexto: 
import React from 'react';

//creamos una variable para crear el primer  el contexto que sera un componente global  
const AuthContext = React.createContext();
//crear un componente padre que va encerrar nuetra app y va  inyectar o insertar 
// el Estado (debemos crear el provider) agregamos un componente y se va a llamar igual 
//y el otro provide va a recibir los hijos 

const AuthProvider = ({children}) => {
    return ( 
        <AuthContext.Provider value={{usuario:true}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export {AuthContext, AuthProvider}  ;