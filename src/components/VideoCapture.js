import React, { useEffect, useRef, useState } from 'react';

function VideoCapture() {
    const videoRef = useRef(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5000');
        setSocket(ws);

        ws.onmessage = (event) => {
            const processedImage = event.data;
            const imgElement = document.getElementById('processed-image');
            imgElement.src = 'data:image/jpeg;base64,' + processedImage;
        };

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();

                const track = stream.getVideoTracks()[0];
                const imageCapture = new ImageCapture(track);

                setInterval(() => {
                    imageCapture.takePhoto()
                        .then(blob => blobToBase64(blob))
                        .then(data => ws.send(data));
                }, 100);
            })
            .catch((err) => console.error('Error accessing the camera:', err));

        return () => {
            ws.close();
        };
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
