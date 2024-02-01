import { useState, useEffect } from "react";
// db es la variable que va aconectar con la base de dato de firebase
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../contexto/AuthContext";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  limit,
  startAfter
} from "firebase/firestore";

//es una funcion
const useObtenerGastos = () => {
  const { usuario } = useAuth();
  const [gastos, cambiarGastos] = useState([]);
  const [ultimoGasto, cambiarUltimoGasto] = useState(null);
  const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);


  const obtenerMasGastos = () => {

    const consulta = query(
      collection (db, 'gasto'),
      where("uidUsuario", "==", usuario.uid),
      orderBy("fecha", "desc"),
      limit(10),
      startAfter(ultimoGasto)
    );
       
   
    onSnapshot (consulta, (snapshot) => {
      if (snapshot.docs.length > 0) {
        cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);

        cambiarGastos(gastos.concat(snapshot.docs.map((gasto) => {
          return {...gasto.data(), id: gastos.id}
        })))
      } else {
        cambiarHayMasPorCargar (false);
      }
    }, error => {console.log(error)});
  }

  useEffect(() => {
    console.log("se ejecuta el hook");
    const consulta = query(
      collection(db, "gasto"),
      where("uidUsuario", "==", usuario.uid),
      orderBy("fecha", "desc"),
      limit(10)

    );

    const unsuscribe = onSnapshot(consulta, (snapshot) => {
      console.log(snapshot);
      if (snapshot.docs.length > 0) {
        cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
        cambiarHayMasPorCargar(true);
      } else {
        cambiarHayMasPorCargar(false);
      }

      cambiarGastos(
        snapshot.docs.map((gasto) => {
          return { ...gasto.data(), id: gasto.id };
        })
      );
    });
    console.log(unsuscribe);

    return unsuscribe;
  }, [usuario]);

  return [gastos, obtenerMasGastos, hayMasPorCargar];
};

export default useObtenerGastos;
