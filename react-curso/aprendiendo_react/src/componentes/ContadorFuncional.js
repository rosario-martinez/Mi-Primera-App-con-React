import React, { useState, useEffect} from "react";
import styles from'./contadorFuncional.module.css';
import Boton from './../elementos/Boton';


const ContadorFuncional = (props) => {
  const [cuenta, cambiarCuenta] = useState(0);

  //componentDidMount y componenteDidUpdate
  // Este hook se ejecuta cada ciclo de renderizado
  useEffect(() => {
    console.log("El componente se renderizo");
  });

  //componentDidMount
  //se ejecuta solo al primer renderizado.
  useEffect(() => {
    console.log("El componente cargo por primera vez ");
    //CONECTAR A UNA API
  }, []);

 //se ejecuta cuando cambia el estado de 
 //la dependencia que le pasamos, en este caso 'contador'
 //useEffect(() => {
   //console.log("El estado del contador cambio");
 // }, [cuenta]); podemos agregar mas cuentas si la tenemos [cuenta, cuenta2,cuenta3 ]

 useEffect(() => {
  //CODIGO DEL EFECTO

  return(()=> {
    console.log('Adios componente!!!');

    //CERRAMOS CONEXION A LA API
  });
 }, []);

  const incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad);
  const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad);

  return (
    <div>
      <h1>Contador: {cuenta}</h1>
      {/*<button
        className={styles.boton}
        onClick={() => incrementar(props.cantidadAIncrementar)}
      >
        Incrementar
      </button>
      <button
        className={styles.boton}
        onClick={() => disminuir(props.cantidadADisminuir)}
      >
        Disminuir
  </button>*/}
      <Boton
        negro
        marginRight
        onClick={() => incrementar(props.cantidadAIncrementar)}
      >
        Incrementar
      </Boton>
      <Boton
        negro
        marginRight
        onClick={() => disminuir(props.cantidadADisminuir)}
      >
        Disminuir
      </Boton>
    </div>
  );
};

export default ContadorFuncional;
