import React from 'react';
import Titulo  from './Titulo'; //utilizamos {Titulo} llaves cuando tenemos mas parametros que incluir 


const Usuario = () => {
  
    const pais = "Venezuela";
    const amigos = ["Fanny", "Delcis", "Josneli", "Rut", "Pedro"];
    

  return (
    <div>
     <Titulo />
      <p>Te deseo el mejor día para hoy, porque eres su hija amada</p>
      {pais && (
        <p>Tu eres de {pais} de donde nacen las mujeres más bellas del MUNDO</p>
      )}
      <p>Tu lista de amigos </p>
      <ul>
        {amigos.map((amigo, index) => (
          <li key={index}>{amigo}</li>
        ))}
      </ul>
      <p>que tengas un BUEN DIA saludos Dios te bendiga</p>
    </div>
  );
};

export default Usuario;
