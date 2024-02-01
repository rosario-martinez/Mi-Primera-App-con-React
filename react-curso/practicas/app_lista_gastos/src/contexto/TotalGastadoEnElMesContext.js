import React, {useState, useEffect, useContext} from 'react';
import useObtenerGastosDelMes from '../hooks/useObtenerGastosDelMes';


//primero creamos el context es nuestro estado global
const TotalGastadoContext = React.createContext();

const useTotalDelMes = () => useContext(TotalGastadoContext)

//segundo creamos el provider
const TotalGastadoProvider = ({children}) => {
    const [total, cambiarTotal] = useState();
    const gastos = useObtenerGastosDelMes()


    useEffect(()=> {
         
        let acumulado = 0; 
        gastos.forEach((gasto) => {
            acumulado += gasto.cantidad 
        })
        
       cambiarTotal(acumulado);
    }, [gastos]);

    return (  
        <TotalGastadoContext.Provider value= {{total: total}}>
            {children}
        </TotalGastadoContext.Provider>
    );
}
 
export {TotalGastadoProvider, useTotalDelMes};