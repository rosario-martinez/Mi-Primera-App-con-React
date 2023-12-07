import {useState, useEffect} from 'react';

const useObtenerArticulo = () => {

    const [articulos, establecerArticulos] = useState([]);
    const [cargando, establecerCargando] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        establecerArticulos([
          {
            id: 1,
            titulo: "Numero de telefonos de tus amigos",
          },
          {
            id: 2,
            titulo: "Direccion de tus amigos",
          },

          {
            id: 3,
            titulo: "Mas informacion ....",
          },
        ]);
        establecerCargando(false);
      }, 3000);
    }, []);
    return [articulos, cargando];
}
export default useObtenerArticulo;