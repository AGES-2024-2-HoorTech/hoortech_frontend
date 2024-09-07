import React, { useEffect, useRef, useState } from 'react';

function VideoCapture() {
  const videoRef = useRef(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000');
    setSocket(ws);

    // Executado quando o WebSocket se conecta com sucesso
    ws.onopen = () => {
      console.log('Conexão WebSocket estabelecida');
    };

    ws.onmessage = (event) => {
      const processedImage = event.data;
      const imgElement = document.getElementById('processed-image');
      imgElement.src = 'data:image/jpeg;base64,' + processedImage;
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error: ', error);
    };

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;

        // Garantir que o vídeo será reproduzido quando estiver pronto
        if (videoRef.current.paused || videoRef.current.ended) {
          videoRef.current.play().catch((err) => {
            console.error("Erro ao tentar reproduzir o vídeo:", err);
          });
        }

        const track = stream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(track);

        // Tira fotos a cada 100ms e as envia pelo WebSocket
        let intervalId = setInterval(() => {
          // Verifica se o WebSocket está aberto antes de enviar dados
          if (ws.readyState === WebSocket.OPEN) {
            imageCapture.takePhoto()
              .then(blob => blobToBase64(blob))
              .then(data => ws.send(data));
          } else {
            console.log('WebSocket não está pronto para enviar dados');
          }
        }, 100);

        // Limpa o intervalo e fecha o WebSocket quando o componente desmontar
        return () => {
          clearInterval(intervalId);
          if (ws && ws.readyState === WebSocket.OPEN) {
            ws.close();
          }
        };
      })
      .catch((err) => console.error('Error accessing the camera:', err));

  }, []);

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }}></video>
      <img id="processed-image" alt="Processed" />
    </div>
  );
}

export default VideoCapture;
