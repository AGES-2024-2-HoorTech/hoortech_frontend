import React, { useEffect, useState } from "react";
import Header from "./pages/components/header/headerComponent";
import "./styles/App.css"; // Importa os estilos
import VideoCapture from "./pages/components/camera/VideoCapture";
import displayLayout from "./pages/components/displayLayout/displayLayoutComponent"

function App() {
  const [theme, setTheme] = useState("light"); // Gerenciamento do tema
  const [caption] = useState("teste de legenda aqui"); // Legenda do vídeo

  // Carrega o tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme; // Atualiza a classe do body
  }, []);

  // Alterna entre temas
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme); // Salva o tema no localStorage
  };

  return (
    <div className={`app ${theme}`}>
      {/* Passa o estado de tema e a função de alternar tema para o Header */}
      <div className="container-app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="container-body">
      <VideoCapture caption={ <displayLayout/>} />
      <div className="container-buttons">
        {/* buttons e dropdown aqui  */}
        <p>buttons and dropdown here</p>
      </div>
      </div>
      </div>

      <div className="container-history">
        {/* historico vai aqui */}
        <p>history here</p>
      </div>
    </div>
  );
}

export default App;
