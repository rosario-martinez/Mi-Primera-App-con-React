
import React, {useState, useContext} from "react"; 



//creamos contexto = estado global.
const ContextoTema = React.createContext();



//creamos el proovedor de nuestro estado global 
const ProovedorTema = ({children}) => {
    const [tema, cambiarTema] = useState(
        {
        alineado: 'center',
        fuente: 30
        }
    );
     const aumentarFuente = () =>
       cambiarTema({ ...tema, fuente: tema.fuente + 1 });
     const disminuirFuente = () =>
       cambiarTema({ ...tema, fuente: tema.fuente - 1 });
       const alinearIzquierda = () =>
         cambiarTema({ ...tema, alineado: 'left'});




    return ( //por aqui pasamos el estado global 
        <ContextoTema.Provider value ={{tema, aumentarFuente, disminuirFuente, alinearIzquierda}}>
            {children} 
        </ContextoTema.Provider>
    ); // vamos a inyectar todos los componente hijos que van adentro 
}

//vamos a exportar diferente porque quiero exportar 2 temas de esta carpeta 
export {ContextoTema, ProovedorTema};