import React from 'react';

 const nombre = "Rosario";
 const color = "fuchsia";

const Titulo = () => {
    return (
      <h1 className="titulo" style={{ color: color }}>
        Hola {nombre} Bienvenida
      </h1>
    );
}

export default Titulo; //se utiliza por default cuando es un solo parametro 
// export {TituloRojo, TituloVerde}; esto seria cuando utilizamos 2 o mas parametros
 //y debemos tambien cambiar los parametros en el codigo  