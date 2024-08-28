import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Atualizado
import App from './components/App/App'; // Atualizado
import reportWebVitals from './utils/reportWebVitals'; // Atualizado

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você estiver utilizando o reportWebVitals, certifique-se de que ele está corretamente configurado.
reportWebVitals();
