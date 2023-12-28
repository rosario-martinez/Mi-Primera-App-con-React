import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
      <header>
        <h1>Blog Personal de Rosario</h1>
        <nav>
          <NavLink to="/">Inicio </NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/acerca-de">Acerca de </NavLink>
        </nav>
      </header>
    );

}
export default Header;
