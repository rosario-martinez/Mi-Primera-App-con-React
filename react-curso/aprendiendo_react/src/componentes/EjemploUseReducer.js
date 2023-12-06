import React, {useReducer} from 'react';
import Boton  from '../elementos/Boton';

const EjemploUseReducer = () => {
    //Reduce
    const reducer = (estado, accion) => {
        switch(accion.tipo){
            case 'INCREMENTAR':
                return{contador:estado.contador + 1}
            case 'DISMINUIR':
                return {contador: estado.contador - 1}
                case 'REINICIAR':
                    return{contador: 0}
            default:
             return estado;
        }
    }
    const contadorInicial = {contador:0};
    const [estado, dispatch ] =useReducer(reducer, contadorInicial);

    console.log(estado)

//accion es un objeto de como queremos cambiar el estado 
// {tipo; 'INCREMENTAR'}

//estado inicial

    



    return (
      <div>
        <Boton
          negro
          marginRight
          onClick={() => dispatch({ tipo: "INCREMENTAR" })}
        >
          Incrementar
        </Boton>
        <Boton
          negro
          marginRight
          onClick={() => dispatch({ tipo: "DISMINUIR" })}
        >
          Disminuir
        </Boton>

        <Boton
          negro
          marginRight
          onClick={() => dispatch({ tipo: "REINICIAR" })}
        >
          Reiniciar
        </Boton>
      </div>
    );
}

export default EjemploUseReducer;