import { useState } from "react";
import './FormularioInicioSesion.css';

const FormularioInicioSesion = (props) => {
    console.log(props)
  const [usuario, cambiarUsuario] = useState("");
  const [password, cambiarPassword] = useState("");

  const onChange = (evento) => {
    if (evento.target.name === "usuario") {
      cambiarUsuario(evento.target.value);
    } else if (evento.target.name === "password") {
      cambiarPassword(evento.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Agregado para prevenir la recarga de la página

    if (usuario === "rosario" && password === "123") {
      props.cambiarEstadoSesion(true);
    } else {
      alert("Datos incorrectos");
      cambiarUsuario("");
      cambiarPassword("");
    }
  };

  return (
    <form action="" onSubmit={onSubmit} className="formulario">
      
      <div>
        <label htmlFor="usuario" className="label">Usuario</label>
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={onChange}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="password" className="label">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
          className="input"
        />
      </div>
      <button type="submit" className="boton">Iniciar Sesión</button>
    </form>
  );
};

export default FormularioInicioSesion;
