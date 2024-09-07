import React from 'react';
import ReactDOM from 'react-dom/client'; // Correção da importação
import './styles/index.css'; // Certo
import App from './App.js'; // Atualizado
import reportWebVitals from './utils/reportWebVitals'; // Atualizado

const root = ReactDOM.createRoot(document.getElementById('root')); // Método correto para criar o root
root.render(
  <React.StrictMode>
    <App /> {/* Renderizando o App que irá controlar toda a aplicação */}
  </React.StrictMode>
);

// Se você estiver utilizando o reportWebVitals, certifique-se de que ele está corretamente configurado.
reportWebVitals();
