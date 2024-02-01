import {useEffect, useState} from 'react';
import useObtenerGastosDelMes from './useObtenerGastosDelMes';

const UseObtenerGastosDelMesPorCategoria = () => {
    const [gastosPorCategoria, cambiarGastosPorCategoria] = useState([]);

    //gastos es un arreglo y dentro tiene objetos 
    const gastos = useObtenerGastosDelMes ();

    useEffect(() => {
const sumaDeGastos = gastos.reduce((objetoResultante, objetoActual) => {
        //aqui vamos a colocar el codigo  de los parametros del array
        const categoriaActual = objetoActual.categoria;
        const cantidadActual = objetoActual.cantidad;

        objetoResultante[categoriaActual] += cantidadActual;

        return objetoResultante;

    }, {
      // agregamos el objeto que vamos a ir sumando su valor
      'comida': 0,
      'cuentas y pagos': 0,
      'hogar': 0,
      'transporte': 0,
      'ropa': 0,
      'salud e higiene': 0,
      'compras': 0,
      'diversion': 0,
        });

    
    cambiarGastosPorCategoria(
      Object.keys(sumaDeGastos).map((elemento) => {
        return { categoria: elemento, cantidad: sumaDeGastos[elemento] };
      }));
    }, [gastos, cambiarGastosPorCategoria]);

    //console.log('gastos', gastos);
    // vamos a utilizar reduce que va a contener la suma de cada objeto con su categoria igual 
    // vamos a agregarle una funcion callback

    

    return gastosPorCategoria;
}
 
export default UseObtenerGastosDelMesPorCategoria;