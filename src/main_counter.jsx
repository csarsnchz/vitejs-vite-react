import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles_counter.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp valor={100} />
  </React.StrictMode>
);
