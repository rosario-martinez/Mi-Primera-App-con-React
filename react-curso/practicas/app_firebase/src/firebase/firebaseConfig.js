// Importa las funciones que necesitas desde los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// La configuración de Firebase de tu aplicación web
// Para Firebase JS SDK v7.20.0 y versiones posteriores, el ID de medición es opcional
//OBJETO DE CONFIGURACION 
//variables de ambiente para que no te roben informacion sencible 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
