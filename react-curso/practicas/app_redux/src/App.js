import React, {useState} from "react";
import styled from "styled-components";
import { NavLink, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import Tienda from "./componentes/Tienda";
import Error404 from "./componentes/Error404";
import Carrito from "./componentes/Carrito";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer from "./reducers/tiendaReducer";

const App = () => {
  
    const [carrito, cambiarCarrito] = useState([]);

    const agregarProductoAlCarrito = (idProductoAAgregar, nombre) => {
      //si el carrito no tiene elemento entonces agregamos uno 
      if(carrito.length === 0){
          cambiarCarrito ([{id: idProductoAAgregar, nombre: nombre, cantidad: 1 }]);
      } else {
        // de otra forma tenemos que revisar que el carrito no tenga ya el producto a agregar 
      // si ya lo tiene entonces queremos actualizar su valor.
      //si no tiene el producto lo agregamos 

      // para poder editar el arreglo tenemos que clonarlo. no podemos editar el original por eso hemos creados un nuevo carrito
      // [...carrito] esta es la clonacion de carrito.
      const nuevoCarrito = [...carrito];

      //queremos comprobar si el carrito ya tiene el ID del producto a agregar un producto 
      //por ello al clon que es nuevoCarrito le aplicamos el metodo filter (ejecuta return que es una funcion que se va a ejecutar por cada arreglo de mi carrito  )
      // resumen estamos comprobando si el elemento que queremos agregar ya esta en carrito y o no y o GUARDAMOS EN LA VARIABLE 
      //YaEstaEnCarrito
      const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
        return productoDeCarrito.id === idProductoAAgregar
      }).length > 0;
      //si ya esta en carrito el producto, lo tenemos que actualizar. 
      if (yaEstaEnCarrito){
      //Para ello tenemos que buscarlo, obtener su posicion en el arrglo y en base a su posicion actualizamos su valor 
     //aplicamos forEach (() => {})es un metodo que permitira ejecutar una funcion  por cada elemento del arreglo 
      nuevoCarrito.forEach((productoDeCarrito, index) => {
        if(productoDeCarrito.id === idProductoAAgregar){
          const cantidad = nuevoCarrito[index].cantidad;
          nuevoCarrito[index] = {
            id: idProductoAAgregar, 
            nombre: nombre, 
            cantidad: cantidad + 1
          }
        }
      });
      //de otra forma entonces agregamos el producto al arreglo.
      } else { //push va a empujar un nuevo elemento al arreglo 
        nuevoCarrito.push(
          { id: idProductoAAgregar,
            nombre: nombre,
            cantidad: 1
          }
        );
      }
      //por ultimo actualizamos el carrito.
      cambiarCarrito(nuevoCarrito);

      }
    } //colapsado el producto 

    const store = createStore(reducer);
    //el reducer es una funcion quese encarga de editar el estado. en este caso el global, se puede tener varios reducer 
  
  return (
    <Provider store={store}>
      <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tienda" element={
          <Tienda
           agregarProductoAlCarrito={agregarProductoAlCarrito}
           />} />
        </Routes>
      </main>

      <aside>
        <Carrito carrito={carrito} />
      </aside>
      </Contenedor>
    </Provider>
    
  );
};

const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
    text-decoration: none; /* Agregué esta línea para evitar la subrayado por defecto */
  }

  a:hover {
    background: #1d85e8;
  }
`;

export default App;
