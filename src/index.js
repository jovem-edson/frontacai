import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home/index.js';
import Login from './pages/Login/index.js'
import Totem from './pages/Totem/index.js';
import Pedido from './pages/Pedidos/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pedido />
  </React.StrictMode>
);

