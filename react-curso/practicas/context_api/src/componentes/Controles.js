import React, {useContext} from 'react';
import styled from "styled-components";
import { ContextoTema } from "./../contextos/contextoTema";

const Controles = () => {
    const { aumentarFuente, disminuirFuente, alinearIzquierda } =
      useContext(ContextoTema);

    return (
      <ContenedorControles>
        <div>
          <div>
            <Boton onClick={aumentarFuente}>Aumentar Fuente</Boton>
            <Boton onClick={disminuirFuente}>Dism Fuente</Boton>
          </div>
          <div>
            <Boton onClick={alinearIzquierda}>Izquierda</Boton>
            <Boton onClick={aumentarFuente}>centro</Boton>
            <Boton onClick={aumentarFuente}>Derecha</Boton>
          </div>
        </div>
      </ContenedorControles>
    );

}

const ContenedorControles = styled.div`
  margin-top: 20px;
`;

const Boton = styled.button`
  background: #165168;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 7px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 3px;

  &:hover {
    background: #191668;
  }
`;

 export default Controles;
