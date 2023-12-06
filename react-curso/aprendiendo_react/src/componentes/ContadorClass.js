import React, {Component} from 'react';

class Contador extends Component{

  constructor (props){
    super(props);
    this.state = { contador: 0}
  }

  componentDidMount(){
    console.log('El componente se cargo en el DOM');
  }
  componentDidUpdate(propiedadesAnteriores, estadoAnterior){
    console.log('El componente se actualizo ');
    console.log('Propiedades anteriores del componente', propiedadesAnteriores);
    console.log("Estado anterior del componente", propiedadesAnteriores, estadoAnterior);
  }
  componentWillUnmount(){
    console.log('Adios componente');
  }



    incrementar (cantidad){
        this.setState((estadoAnterior)  =>{
          return{
            contador: estadoAnterior.contador + cantidad 
          }
        });
    }

    disminuir (cantidad) {
      this.setState((estadoAnterior) => {
        return {
          contador: estadoAnterior.contador - cantidad
        };
      });
      
    }


    render(){
        return (
          <div>
            <h1>Contador:{this.state.contador}</h1>
            <button onClick={() => this.incrementar(this.props.cantidadAIncrementar)}>Incrementar</button>
            <button onClick={() => this.disminuir(this.props.cantidadADisminuir)}>Disminuir</button>
          </div>
        );
    }
}
export default Contador;