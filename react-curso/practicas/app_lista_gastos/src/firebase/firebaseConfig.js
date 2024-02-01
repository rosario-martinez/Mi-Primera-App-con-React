import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
//import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

;
// Importa las funciones que necesitas desde los SDK que necesitas



// La configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

// console.log(firebaseConfig);

// Inicializar base de fuego
 initializeApp(firebaseConfig);

 //creamos estas funciones para llamar a lo que hemos importado y estamos exportando 
 // las constante para poderlas utilizar en las otras ventanas de la app
const auth = getAuth();
const db = getFirestore();
export {db, auth};
