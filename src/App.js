import React, { useEffect, useRef, useState } from "react";
import Header from "./pages/components/header/headerComponent";
import "./styles/App.css"; // Importa os estilos
import VideoCapture from "./pages/components/camera/VideoCapture";

function App() {
  const [theme, setTheme] = useState("light"); // Gerenciamento do tema
  const [caption, setCaption] = useState("teste de legenda aqui"); // Legenda do vídeo

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
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Componente VideoCapture */}
      <VideoCapture caption={caption} />
    </div>
  );
}

export default App;
