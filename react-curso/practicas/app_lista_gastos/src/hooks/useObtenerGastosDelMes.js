import { useState, useEffect } from "react";
import { db } from "./../firebase/firebaseConfig";
import {
  collection,
  where,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import { useAuth } from "./../contexto/AuthContext";

const useObtenerGastosDelMes = () => {
  const [gastos, establecerGastos] = useState([]);
  const { usuario } = useAuth();

  useEffect(() => {
    const inicioDeMes = getUnixTime(startOfMonth(new Date()));
    //const inicioDeMes = getUnixTime(startOfMonth(new Date('20240101')));
    const finDeMes = getUnixTime(endOfMonth(new Date()));

    //console.log("id", usuario.uid);
    //esta es nuestra nase de dato
    if (usuario) {
      console.log("hay usuario", usuario);
      const consulta = query(
        collection(db, "gasto"),
        orderBy("fecha", "desc"),
        where("fecha", ">=", inicioDeMes),
        where("fecha", "<=", finDeMes),
        where("uidUsuario", "==", usuario.uid)
      );

      const unsuscribe = onSnapshot(
        consulta,
        (snapshot) => {
          console.log("documento", snapshot.docs);
          establecerGastos(
            snapshot.docs.map((documento) => {
              console.log("documento", documento);
              return { ...documento.data(), id: documento.id }; //establecimos nuestros datos
            })
          );
        },
        (error) => {
          console.log(error);
        }
      );

      return unsuscribe;
    }
  }, [usuario]);

  return gastos;
};

export default useObtenerGastosDelMes;
