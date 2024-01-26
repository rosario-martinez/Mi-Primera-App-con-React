import { useState, useEffect } from "react";
import { db } from "./../firebase/firebaseConfig";
import { useAuth } from "./../contexto/AuthContext";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  limit,
} from "firebase/firestore";

const useObtenerGastos = () => {
  const { usuario } = useAuth();
  const [gastos, cambiarGastos] = useState([]);
  const [ultimoGasto, cambiarUltimoGasto] = useState(null);
  const [hayMasPorCargar, cambiarHayMasPorCargar] = useState (false);

  useEffect(() => {
    const consulta = query(
      collection(db, "gastos"),
      where("uidUsuario", "==", usuario.uid),
      orderBy("fecha", "desc"),
      limit(10)
      
    );

    const unsuscribe = onSnapshot(consulta, (snapshot) => {
        if (snapshot.docs.length > 0 ){
            cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);
            cambiarHayMasPorCargar(true);
        } else{
            cambiarHayMasPorCargar(false);
        }

        cambiarGastos(snapshot.docs.map((gasto) => {
        return {...gasto.data(), id: gasto.id}
        }));
    });

    return unsuscribe;
  }, [usuario]);

  return [gastos, hayMasPorCargar];
};

export default useObtenerGastos;
