import React from 'react';
import Productos from './Productos';


const Tienda = ({ agregarProductoAlCarrito }) => {
  return (
    <div>
      <h1>Tienda</h1>
      <Productos
        agregarProductoAlCarrito={agregarProductoAlCarrito}
      />
    </div>
  );
};

export default Tienda;
