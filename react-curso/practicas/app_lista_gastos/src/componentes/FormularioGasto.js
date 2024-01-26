import React, { useState } from "react";
import {
  ContenedorFiltros,
  Formulario,
  Input,
  InputGrande,
  ContenedorBoton,
} from "./../elementos/ElementosDeFormulario";
import Boton from "../elementos/Boton";
import { ReactComponent as IconoPlus } from "./../imagenes/plus.svg";
import SelectCategorias from "./SelectCategorias";
import DatePicker from "./DatePicker";
import agregarGasto from "../firebase/agregarGastos";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";
import { useAuth } from "./../contexto/AuthContext";
import Alerta from "./../elementos/Alerta";

const FormularioGasto = () => {
  const [inputDescripcion, cambiarInputDescripcion] = useState("");
  const [inputCantidad, cambiarInputCantidad] = useState("");
  const [categoria, cambiarCategoria] = useState("hogar");
  //new Date te crea la fecha actual de el dia, mes y a;o que abres la app.

  const [fecha, cambiarFecha] = useState(new Date());
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const { usuario } = useAuth();

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      cambiarInputDescripcion(e.target.value);
    } else if (e.target.name === "cantidad") {
      cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, "")); //(/[^0-9.]/g, '')); esta formula permite que no escriba letras si no solo numeros en la cantidad
    } //expresion regular sencilla
  };
  //funcion de tipo flecha
  const handleSubmit = (e) => {
    e.preventDefault();
    //con esta variable parseFloat(inputCantidad).toFixed(2); tenemos los decimales
    let cantidad = parseFloat(inputCantidad).toFixed(2);

    //comprobamos que haya un valo y descripcion y no genere valor vacio

    //esta funcion agrega los gastos

    if (inputDescripcion !== "" && inputCantidad !== "") {
      if (cantidad) {
        agregarGasto({
          categoria: categoria,
          descripcion: inputDescripcion,
          cantidad: inputCantidad,
          fecha: getUnixTime(fecha),
          uidUsuario: usuario.uid,
        })
        .then(() => {
          cambiarCategoria('hogar');
          cambiarInputDescripcion ('');
          cambiarInputCantidad('');
          cambiarFecha(new Date());

          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "exito",
            mensaje: " el gasto fue agregado correctamente ",
          });

        })
        .catch((error)=>{
          cambiarEstadoAlerta(true);
          cambiarAlerta({tipo: 'error', mensaje: "hubo un problema al agregar tu gasto"})
        })
      } else {
        cambiarEstadoAlerta(true);
        cambiarAlerta({
          tipo: "error",
          mensaje: "el valor que ingresastes no es correcto ",
        });
      }
    } else {
      cambiarEstadoAlerta(true);
      cambiarAlerta({ tipo: "error", mensaje: "por favor rellena los datos " });
    }
  };

  return (
    <Formulario onSubmit={handleSubmit}>
      <ContenedorFiltros>
        <SelectCategorias
          categoria={categoria}
          cambiarCategoria={cambiarCategoria}
        />
        {/*datePicker permite tener el calendario y tomar los datos de de nuestra funcion fecha */}
        <DatePicker fecha={fecha} cambiarFecha={cambiarFecha} />
      </ContenedorFiltros>

      <div>
        <Input
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="descripcion de gastos"
          value={inputDescripcion}
          onChange={handleChange}
        />
        <InputGrande
          type="text"
          name="cantidad"
          placeholder="$0.00"
          value={inputCantidad}
          onChange={handleChange}
        />
      </div>
      <ContenedorBoton>
        <Boton as="button" primario="string" conicono="true" type="submit">
          Agregar Gastos <IconoPlus />
        </Boton>
      </ContenedorBoton>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </Formulario>
  );
};

export default FormularioGasto;
