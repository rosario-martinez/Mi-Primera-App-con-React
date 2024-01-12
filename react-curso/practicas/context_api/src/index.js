import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ProovedorTema} from './contextos/contextoTema';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProovedorTema>
      <App />
    </ProovedorTema>
  </React.StrictMode>
);

