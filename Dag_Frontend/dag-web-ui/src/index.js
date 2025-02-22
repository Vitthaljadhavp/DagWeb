import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'animate.css'
import 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
