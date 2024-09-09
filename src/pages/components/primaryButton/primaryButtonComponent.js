import React from 'react';
import './primaryButtonComponent.css';

const PrimaryButton = ({ text, imageSrc, onClick, isDarkMode }) => {
  return (
    <div className={`button-container ${isDarkMode ? 'dark' : 'light'}`}>
      <button
        className={`primary-button ${isDarkMode ? 'dark' : 'light'}`}
        onClick={onClick}
      >
        <img src={imageSrc} alt="icon" className="button-icon" />
      </button>
      <p className={`button-text ${isDarkMode ? 'dark' : 'light'}`}>{text}</p>
    </div>
  );
};

export default PrimaryButton;