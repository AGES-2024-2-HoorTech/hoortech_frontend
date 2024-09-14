import React, { useEffect, useState } from "react";
import Header from "./pages/components/header/headerComponent";
import "./styles/App.css"; // Importa os estilos
import VideoCapture from "./pages/components/camera/VideoCapture";
import BasicSelect from "./pages/components/languageDropdown/languageDropdownComponent";
import PrimaryButton from "./pages/components/primaryButton/primaryButtonComponent";

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
          <VideoCapture caption={caption} />
          <div className="container-items">
            {/* dropdown here  */}
            <BasicSelect />
            <div className="container-buttons">
              <PrimaryButton text='Tela cheia' icon='fullscreen'/>
              <PrimaryButton text='Desativar camêra' icon='videocam'/>
              <PrimaryButton text='Posição da legenda' icon='remove'/>
              <PrimaryButton text='Configurações da legenda' icon='text_fields'/>
            </div>
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
