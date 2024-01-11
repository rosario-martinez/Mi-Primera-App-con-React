import React from "react";
import styled from "styled-components";

const Producto = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;

const NombreProducto = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;
const Carrito = ({carrito}) => {
  
  return (
    <div>
      <h3>Carrito de Compra</h3>
      {carrito.length > 0 ? (
        carrito.map((producto, index) => {
          return (
            <Producto key={index}>
              <NombreProducto>{producto.nombre}</NombreProducto>
              Cantidad: {producto.cantidad}
            </Producto>
          );
        })
      ) : (
        <p>aun no has agregado productos</p>
      )}
    </div>
  );
};


export default Carrito;
