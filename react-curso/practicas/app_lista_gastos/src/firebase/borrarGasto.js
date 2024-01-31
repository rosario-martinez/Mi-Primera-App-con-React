import { db } from "./firebaseConfig";
import {doc, deleteDoc} from 'firebase/firestore';

const borrarGasto = async(id) => {
     await  deleteDoc(doc(db, 'gasto', id)); //asincrona
    
}
export default borrarGasto;