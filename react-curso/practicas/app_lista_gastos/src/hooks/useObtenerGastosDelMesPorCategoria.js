import {useEffect, useState} from 'react';
import useObtenerGastosDelMes from './useObtenerGastosDelMes';

const UseObtenerGastosDelMesPorCategoria = () => {
    const [gastosPorCategoria, cambiarGastosPorCategoria] = useState([]);
    //gastos es un arreglo y dentro tiene objetos 
    const gastos = useObtenerGastosDelMes ();
    console.log(gastos);
    // vamos a utilizar reduce que va a contener la suma de cada objeto con su categoria igual 



    return;
}
 
export default UseObtenerGastosDelMesPorCategoria;