import React, { useEffect, useRef, useState } from 'react';
import './VideoCapture.css';
import displayLayout from '../displayLayout/displayLayoutComponent';

function VideoCapture() {
  const videoRef = useRef(null);
  const [setScoket, setSocket] = useState(null);
  const [isSocketOpen, setIsSocketOpen] = useState(false); 
  // Verificação de estado do WebSocket

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
    <div className='container-video'>
        <video
          ref={videoRef}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay
        ></video>

        {displayLayout}
       
    </div>
  );
}

export default VideoCapture;
