import { db } from "./firebaseConfig";
import {doc, updateDoc} from 'firebase/firestore'; 


//este codigo cambio
const editarGasto = async ({ id, categoria, descripcion, cantidad, fecha}) => {
    const documento = doc(db, 'gasto', id);
   return await  updateDoc(documento, {
    categoria: categoria,
    descripcion: descripcion,
    cantidad: Number(cantidad),
    fecha: fecha
})
}
export default editarGasto;
