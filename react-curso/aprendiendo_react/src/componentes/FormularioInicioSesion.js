import { useState } from "react";

const FormularioInicioSesion = () => {
    const[usuario, cambiarUsuario] = useState ('');
    const [password, cambiarPassword] = useState('');

    //const onChangeUsuario = (evento) => {
        //console.log(evento);
        //cambiarUsuario(evento.target.value);
    //}

    //const onChangePassword = (evento) => {
      
     // cambiarPassword(evento.target.value);
   // };

    const onChange = (evento) => {
        if(evento.target.name === 'suario'){
            cambiarUsuario(evento.target.value);
        }else if (evento.target.name === 'password'){
            cambiarPassword(evento.target.vale);
        }
    }

    return (
      <form action="">
        <p>Usuario: {usuario}</p>
        <p>Constrase*a: {password}</p>
        <div>
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            name="usuario"
            id="usuario"
            value={usuario}
            onChange= {onChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contrase*a</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button type="submit">Iniciar Sesion</button>
      </form>
    );
}
 
export default FormularioInicioSesion;