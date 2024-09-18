// src/pages/components/translationHistory/translationHistory.js
import React, { useState } from "react";
import "./translationHistory.css";
import { PDFGenerator } from "./pdfGenerator"; 

const TranslationHistory = () => {
  const [translations, setTranslations] = useState([
    { time: "15:04", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    { time: "15:08", text: "Lorem ipsum dolor sit amet. Ea dicta minima..." },
    
  ]);

  const downloadHistory = () => {
    const pdfGenerator = new PDFGenerator(translations);
    pdfGenerator.generatePDF();
  };

  return (
    <div className="history-container">
      <h2 className="history-title">Histórico de Traduções</h2>
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
