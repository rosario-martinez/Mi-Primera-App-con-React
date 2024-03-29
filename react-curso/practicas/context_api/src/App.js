import React, {useContext}from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import AcercaDe from "./componentes/AcercaDe";
import styled from "styled-components";
import Post from "./componentes/post";
import Error404 from "./componentes/Error404";
import { ContextoTema } from "./contextos/contextoTema";


const App = () => {

  const {tema}= useContext(ContextoTema);
console.log(tema);

  return (
    <BrowserRouter>
    <ContenedorPrincipal>
      <div>
        <Header/>
        
        <Main tema ={tema}>
          <Routes>
            <Route path="*" element={<Error404 />}/>
            <Route path="/post/:id" element={<Post/>}/>
            <Route path="/"element={<Inicio/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/acerca-de" element={<AcercaDe/> }
            />
          </Routes>
        </Main>
      </div>
    </ContenedorPrincipal>
    </BrowserRouter>
  );
}  

 const ContenedorPrincipal = styled.div`
    padding: 40px;
    width: 90%;
    max-width: 700px;
 
 `;

 const Main = styled.main`
   font-size: ${props => props.tema ? props.tema.fuente + "px" : "16px"};
   text-align: ${props => props.tema ? props.tema.alineado + "px" : "right"};
   background: #fff;
   padding: 40px;
   border-radius: 10px;
   box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
 `;

export default App;
