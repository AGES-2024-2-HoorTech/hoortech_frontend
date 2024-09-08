import React from 'react';
import ReactDOM from 'react-dom/client'; // Correção da importação
import './styles/index.css'; // Certo
import App from './App.js'; // Atualizado
import reportWebVitals from './utils/reportWebVitals'; // Atualizado
import Header from './pages/components/header/headerComponent.js';

const root = ReactDOM.createRoot(document.getElementById('root')); // Método correto para criar o root
root.render(
  
  <React.StrictMode>

<Header/>
<App/>
</React.StrictMode>
);

// Se você estiver utilizando o reportWebVitals, certifique-se de que ele está corretamente configurado.
reportWebVitals();
