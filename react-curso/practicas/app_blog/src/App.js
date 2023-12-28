import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import AcercaDe from "./componentes/AcercaDe";
import styled from "styled-components";


const App = () => {
  return (
    <BrowserRouter>
    <ContenedorPrincipal>
      <div>
        <Header/>
        
        <Main>
          <Routes>
            
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
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
  
 `;

export default App;
