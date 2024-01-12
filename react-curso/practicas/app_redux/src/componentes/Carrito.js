import React, { useContext } from "react";
import styled from "styled-components";
import { connect,useSelector } from "react-redux";


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
const Carrito = () => {
  const carrito = useSelector((estado) => estado.carrito);
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

const mapStateToProps = (estado) => {
  return {
    carrito: estado.carrito
  }
}

export default connect(mapStateToProps)(Carrito);
