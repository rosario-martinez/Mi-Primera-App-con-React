import { useState } from "react";
import styles  from'./FormularioInicioSesion.module.css'
import Boton from "./../elementos/Boton";


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
    <form action="" onSubmit={onSubmit} className={styles.formulario}>
      <h1>No has iniciado sesión</h1>
      
      <div>
        
        <label htmlFor="usuario" className= {styles.label}>
          Usuario
        </label>
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor="password" className={styles.label}>
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      {/*<button type="submit" className={styles.boton}>
        Iniciar Sesión
  </button>*/}
  <div>
    <Boton largo type="submit">Iniciar Sesion</Boton>
  </div>
  
    </form>
  );
};

export default FormularioInicioSesion;
