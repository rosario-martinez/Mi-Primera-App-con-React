import React, {useState} from 'react';
import styled from "styled-components";
import db from './../firebase/firebaseConfig';
import {collection, addDoc} from "firebase/firestore";




const Formulario = () => {

    const[nombre, cambiarNombre] = useState('');
    const[correo, cambiarCorreo] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
 //esta funcion es asincrona (async) no bloquea el hilo de la ejecucion de nuestro programa, en lugar de esperar 
 //que una funcion se detenga permite que el programa siga ejecutandose, regresa una promesa 
 //la async va en la funcion primero y luego va await dentro de la funcion 
 //esta es la que espera el primer proceso o promesa miestras se ejecuta la funcion async

 //que pasa si await nos devuelve un error. lo atrapamos con try 

        try{
            await addDoc(collection(db, 'usuarios'), {
            nombre: nombre,
            correo: correo
        });
        } catch(error) {
            console.log('hubo un error');
            console.log(error);
        }
        

        cambiarNombre ('');
        cambiarCorreo ('');
    }
    return (
        <form action="" onSubmit={onSubmit}>
            <Input
            type="text"
            name= "nombre"
            value={nombre}
            onChange={(e) => cambiarNombre(e.target.value)}
            placeholder="Nombre"
            />
            <Input
            type="email"
            name= "correo"
            value={correo}
            onChange={(e)=> cambiarCorreo(e.target.value)}
            placeholder="Correo"
            />
            <Boton type ="submit">Agregar</Boton>
        </form>
    );
}

const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;

const Boton = styled.button`
	padding: 10px 30px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;
 


export default Formulario;