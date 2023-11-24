import { useState } from "react";

const FormularioInicioSesion = () => {
    const[usuario, cambiarUsuario] = useState ('');
    const [password, cambiarPassword] = useState('');


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
          onChange={() => {
            console.log('El input cambio')
          }}
          />
        </div>
        <div>
          <label htmlFor="password">Contrase*a</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Iniciar Sesion</button>
      </form>
    );
}
 
export default FormularioInicioSesion;