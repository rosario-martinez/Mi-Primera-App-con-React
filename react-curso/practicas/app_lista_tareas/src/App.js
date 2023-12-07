import './App.css';
import Header from "./componentes/Header";
import FormularioTareas from './componentes/FormulariosTareas';


const App = () => {
  return (
    <div className = "contenedor">
      <Header/>
      <FormularioTareas />
    </div>
  );
}

export default App;
