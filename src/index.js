import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import './App.css';

// Создаём корень для рендера
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение в корень
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);