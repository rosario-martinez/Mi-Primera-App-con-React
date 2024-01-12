import React from 'react';
import posts from '../data/posts';
import { useParams, Navigate } from 'react-router-dom';



const Post = () => {
    const {id} = useParams();
    return ( 
        <>
        {posts[id-1] ? 
         <div>
            <h1>{posts[id-1].titulo}</h1>
            <p>{posts[id-1].texto}</p>
        </div>
    
        :
        //esta es una forma de identificar que el articulo no exite 
        //<div> 
           // <h1>El articulo no existe </h1>
       // </div>

            //esta segunda forma es para ridereccionar una ruta en este caso la de inicio 

       <Navigate replace to="/" />

        }
       
        
        </>
        
     );
}
 
export default Post ;