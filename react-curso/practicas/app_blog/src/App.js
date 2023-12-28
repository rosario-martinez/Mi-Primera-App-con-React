import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import AcercaDe from "./componentes/AcercaDe";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        
        <main>
          <Routes>
            
            <Route path="/"element={<Inicio/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/acerca-de" element={<AcercaDe/> }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
