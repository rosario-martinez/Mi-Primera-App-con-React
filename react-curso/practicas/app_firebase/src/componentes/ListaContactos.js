import React, { useState, useEffect } from "react"; //useEffect (mostrara los valores cuando cambien )
import styled from "styled-components";
import db from "./../firebase/firebaseConfig";
import Contacto from "./Contacto";
import { collection, onSnapshot } from "firebase/firestore";
// onSnapshot actualiza la base de datos en tiempo real 

const ListaContactos = () => {
  const [contactos, cambiarContactos] = useState([]);

  // atravez de useEffect nos vamos a conectar a firebase por medio de onSnapshot
  //se puede hacer con varias formas pero yo prefiero esta porque permite hacer cambios en el formulario 
  useEffect (() => {
    onSnapshot(
      collection(db, 'usuarios'), //primer parametro

      // este 2 param. es una funcion que se va a ejecutar cada vez que hay un cambio
      (snapshot) => {
           //console.log ('Se ejecuto snapshot') ;
           //console.log(snapshot.docs [0].data());

           const arregloUsuarios = snapshot.docs.map((documento) => {
            return{... documento.data (), id: documento.id}
           })

           cambiarContactos(arregloUsuarios);
      },
      (error) => {
        console.log(error);
      }
     );
  }, []);
     
  return (
    contactos.length > 0 && (
      <ContenedorContactos>
        {contactos.map((contacto) => (
          <Contacto
            key={contacto.id}
            id={contacto.id}
            nombre={contacto.nombre}
            correo={contacto.correo}
          />
        ))}
      </ContenedorContactos>
    )
  );
};

const ContenedorContactos = styled.div`
  margin-top: 40px;
`;

export default ListaContactos;
