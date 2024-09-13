import React, { useEffect, useRef, useState } from "react";
import Header from "./pages/components/header/headerComponent";
import "./styles/App.css"; // Importa os estilos

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

function VideoCapture({ caption }) {
  const videoRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [isSocketOpen, setIsSocketOpen] = useState(false); // Verificação de estado do WebSocket

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");
    setSocket(ws);

    ws.onopen = () => {
      console.log("Conexão WebSocket estabelecida");
      setIsSocketOpen(true); // Indica que o WebSocket está pronto
    };

    ws.onmessage = (event) => {
      const processedImage = event.data;
      const imgElement = document.getElementById("processed-image");
      if (imgElement) {
        imgElement.src = "data:image/jpeg;base64," + processedImage;
      }
    };

    ws.onerror = (error) => {
      console.error("Erro no WebSocket: ", error);
    };

    ws.onclose = () => {
      setIsSocketOpen(false);
      console.log("WebSocket fechado");
    };

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch((err) => {
          console.error("Erro ao tentar reproduzir o vídeo:", err);
        });

        const track = stream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(track);

        const intervalId = setInterval(() => {
          if (isSocketOpen && ws.readyState === WebSocket.OPEN) {
            imageCapture
              .takePhoto()
              .then((blob) => blobToBase64(blob))
              .then((data) => ws.send(data))
              .catch((err) => console.error("Erro ao capturar a imagem:", err));
          } else {
            console.log("WebSocket ainda não está pronto para enviar dados");
          }
        }, 100);

        return () => {
          clearInterval(intervalId);
          ws.close();
        };
      })
      .catch((err) => {
        console.error("Erro ao acessar a câmera:", err);
      });

    return () => {
      ws.close();
    };
  }, [isSocketOpen]);

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "900px", // Ajuste conforme necessário para coincidir com o mockup
          height: "500px", // Proporção mais larga e retangular
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#f8f8f8", // Coloca uma cor de fundo caso o vídeo não carregue
          marginRight: "20px", // Adicione uma margem à direita para espaçamento
        }}
      >
        <video
          ref={videoRef}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay
        ></video>

        {/* Legenda sobre o vídeo */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {caption}
        </div>
      </div>

      <img
        id="processed-image"
        alt="Processed"
        style={{ maxWidth: "100%", marginTop: "20px" }}
      />
    </div>
  );
}

export default App;
