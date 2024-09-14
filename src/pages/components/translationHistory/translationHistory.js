import React, { useState } from "react";
import "./translationHistory.css";
import jsPDF from "jspdf";

const TranslationHistory = () => {
  const [translations, setTranslations] = useState([
    { time: "15:04", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    { time: "15:08", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    { time: "15:08", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    { time: "15:08", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    { time: "15:08", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    { time: "15:08", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    { time: "15:08", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    { time: "15:08", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    { time: "15:08", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    
  ]);

  const downloadHistory = () => {
    const doc = new jsPDF();
    doc.text("Histórico de traduções", 10, 10);
    translations.forEach((translation, index) => {
      doc.text(
        `${translation.time} - ${translation.text}`,
        10,
        20 + index * 10
      );
    });
    doc.save("translation-history.pdf");
  };

  return (
    <div className="history-container">
      <h2>Histórico de traduções</h2>
      <div className="history-list">
        {translations.map((translation, index) => (
          <div key={index} className="translation-item">
            <span className="time">{translation.time}</span>
            <div className="text-box">
              <p>{translation.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={downloadHistory} className="download-button">
        Download Histórico
      </button>
    </div>
  );
};

export default TranslationHistory;
