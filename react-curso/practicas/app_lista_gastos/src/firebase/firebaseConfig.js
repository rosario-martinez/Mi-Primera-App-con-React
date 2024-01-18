import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

;
// Importa las funciones que necesitas desde los SDK que necesitas
// TODO: Agregar SDK para los productos de Firebase que deseas usar
// https://firebase.google.com/docs/web/setup#available-libraries

// La configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyDqeLt5KPvg2Tcs2BN8Cs67zMW5mW5009s",
  authDomain: "react-app-lista-de-gasto-378a0.firebaseapp.com",
  projectId: "react-app-lista-de-gasto-378a0",
  storageBucket: "react-app-lista-de-gasto-378a0.appspot.com",
  messagingSenderId: "1098338755296",
  appId: "1:1098338755296:web:c3a3ed6d2ce8d8041ae685",
};

// Inicializar base de fuego
const app = initializeApp(firebaseConfig);
