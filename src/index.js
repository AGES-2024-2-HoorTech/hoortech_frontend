import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Atualizado
import App from './components/App/App'; // Atualizado
import reportWebVitals from './utils/reportWebVitals'; // Atualizado
import ReactDOM from 'react-dom';
import './index.css';
import VideoCapture from './components/VideoCapture';

ReactDOM.render(
  <React.StrictMode>
    <VideoCapture />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se você estiver utilizando o reportWebVitals, certifique-se de que ele está corretamente configurado.
reportWebVitals();
