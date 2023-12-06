import React from 'react';
import Titulo  from './Titulo';
import styled from 'styled-components';
 //utilizamos {Titulo} llaves cuando tenemos mas parametros que incluir 


const Usuario = () => {
  
    const Pais = "Venezuela";
    const amigos = ["Fanny", "Delcis", "Josneli", "Rut", "Pedro"];
    

  return (
    <div>
      <Titulo />

      <Parrafo>Tu lista de amigos </Parrafo>
      {Pais && <p>Tu eres de: {Pais}</p>}
      <ul>
        {amigos.map((amigo, index) => (
          <li key={index}>{amigo}</li>
        ))}
      </ul>
      <Parrafo>que tengas un BUEN DIA saludos Dios te bendiga</Parrafo>
    </div>
  );
};

const Parrafo = styled.p`
  margin: 20px 0;
`;

export default Usuario;
