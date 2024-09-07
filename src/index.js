import React from 'react';
import ReactDOM from 'react-dom/client'; // Correção da importação
import './styles/index.css'; // certo
import App from './components/App/App.js'; // Atualizado
import reportWebVitals from './utils/reportWebVitals'; // Atualizado
import VideoCapture from './components/VideoCapture/VideoCapture.js'; // Atualizado

const root = ReactDOM.createRoot(document.getElementById('root')); // Método correto para criar o root
root.render(
  <React.StrictMode>
    <VideoCapture />  {/* Ou <App /> dependendo do componente que quer renderizar */}
  </React.StrictMode>
);

// Se você estiver utilizando o reportWebVitals, certifique-se de que ele está corretamente configurado.
reportWebVitals();
