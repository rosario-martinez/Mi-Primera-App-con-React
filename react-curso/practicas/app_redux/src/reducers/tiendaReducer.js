const estadoInicial = {
  //SE realizo una prop. de objeto llamada producto (el cual tiene un arreglo) y luego prop. carrito (tambien tiene un arreglo )
  productos: [
    { id: 1, nombre: "Producto A" },
    { id: 2, nombre: "Producto B" },
    { id: 3, nombre: "Producto C" },
    { id: 4, nombre: "Producto D" },
  ],

  carrito: [],
};

const reducer = (estado = estadoInicial, accion) => {
  //return estado;
  switch (accion.type) {
    case "AGREGAR_PRODUCTO_AL_CARRITO":
      // Lógica para agregar producto al carrito
      //voy hacer una destructuracion
      const { nombre, idProductoAAgregar } = accion;

      if (estado.carrito.length === 0) {
        return {
          ...estado,
          carrito: [{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }],
        };
      } else {
        // de otra forma tenemos que revisar que el carrito no tenga ya el producto a agregar
        // si ya lo tiene entonces queremos actualizar su valor.
        //si no tiene el producto lo agregamos

        // para poder editar el arreglo tenemos que clonarlo. no podemos editar el original por eso hemos creados un nuevo carrito
        // [...carrito] esta es la clonacion de carrito.
        const nuevoCarrito = [...estado.carrito];

        //queremos comprobar si el carrito ya tiene el ID del producto a agregar un producto
        //por ello al clon que es nuevoCarrito le aplicamos el metodo filter (ejecuta return que es una funcion que se va a ejecutar por cada arreglo de mi carrito  )
        // resumen estamos comprobando si el elemento que queremos agregar ya esta en carrito y o no y o GUARDAMOS EN LA VARIABLE
        //YaEstaEnCarrito
        const yaEstaEnCarrito =
          nuevoCarrito.filter((productoDeCarrito) => {
            return productoDeCarrito.id === idProductoAAgregar;
          }).length > 0;

        //si ya esta en carrito el producto, lo tenemos que actualizar.
        if (yaEstaEnCarrito) {
          //Para ello tenemos que buscarlo, obtener su posicion en el arrglo y en base a su posicion actualizamos su valor
          //aplicamos forEach (() => {})es un metodo que permitira ejecutar una funcion  por cada elemento del arreglo
          nuevoCarrito.forEach((productoDeCarrito, index) => {
            if (productoDeCarrito.id === idProductoAAgregar) {
              const cantidad = nuevoCarrito[index].cantidad;
              nuevoCarrito[index] = {
                id: idProductoAAgregar,
                nombre: nombre,
                cantidad: cantidad + 1,
              };
            }
          });
          //de otra forma entonces agregamos el producto al arreglo.
        } else {
          //push va a empujar un nuevo elemento al arreglo
          nuevoCarrito.push({
            id: idProductoAAgregar,
            nombre: nombre,
            cantidad: 1,
          });
        }

        return {
          ...estado,
          carrito: nuevoCarrito,
        };
      }

    // Lógica para agregar producto al carrito

    default:
      return estado;
  }
};

//el reducer es una funcion que se va a encargar de administrar el estado de nuestra app

export default reducer;
