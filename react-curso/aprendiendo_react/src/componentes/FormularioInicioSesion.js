const FormularioInicioSesion = () => {
    return (
      <form action="">
        <p>Usuario</p>
        <p>Constrase*a</p>
        <div>
          <label htmlFor="usuario">Usuario</label>
          <input type="text" name="usuario" id="usuario" />
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