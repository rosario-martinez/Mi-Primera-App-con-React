import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
//import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

;
// Importa las funciones que necesitas desde los SDK que necesitas


// La configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: process.env.REACT_API_APIKEY,
  authDomain: process.env.REACT_API_AUTHDOMAIN,
  projectId: process.env.REACT_API_PROJECTID,
  storageBucket: process.env.REACT_API_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_API_MESSAGINGSENDERID,
  appId: process.env.REACT_API_APPID
};

console.log(firebaseConfig);

// Inicializar base de fuego
 initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
//const app = initializeApp(firebaseConfig);
export {db, auth};
