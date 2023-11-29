import React, { useState } from "react";

const Contador = (props) => {
  const [contador, setContador] = useState(0);

  const incrementar = (cantidad) => {
    setContador((estadoAnterior) => estadoAnterior + cantidad);
  };

  const disminuir = (cantidad) => {
    setContador((estadoAnterior) => estadoAnterior - cantidad);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => incrementar(props.cantidadAIncrementar)}>
        Incrementar
      </button>
      <button onClick={() => disminuir(props.cantidadADisminuir)}>
        Disminuir
      </button>
    </div>
  );
};

export default Contador;
