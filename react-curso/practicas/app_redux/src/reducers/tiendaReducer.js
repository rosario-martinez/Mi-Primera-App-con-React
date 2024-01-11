const estadoInicial= {
    //SE realizo una prop. de objeto llamada producto (el cual tiene un arreglo) y luego prop. carrito (tambien tiene un arreglo )
    productos: [
    { id: 1, nombre: "Producto A" },
  { id: 2, nombre: "Producto B" },
  { id: 3, nombre: "Producto C" },
  { id: 4, nombre: "Producto D" },
    ],

    carrito: [1,2,3]
}


const reducer = (estado = estadoInicial, accion) => {
    return estado;  
}

export default reducer;
