import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import useObtenerArticulos from '../hooks/useObtenerArticulos';




const Blog = () => {

    const [articulos,  cargando ] = useObtenerArticulos();
    return (

      <ContenedorBlog>

        <Titulo>Blog</Titulo>
        {cargando === true? 
        <p>Cargando...</p>
        :
        <div>
            {articulos.map((articulo) => {
                return <Articulo key={articulo.id}>{articulo.titulo}</Articulo>
            })}
        </div>
        }
        </ContenedorBlog>
        
    );
}

const ContenedorBlog = styled.div`
    margin: 40px 0 20px 0;
`;

const Titulo = styled.h2`
    margin-bottom: 10px;
`;
const Articulo = styled.p`
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc; 
`;


export default Blog;
