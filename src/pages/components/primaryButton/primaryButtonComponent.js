import React from 'react';
import './primaryButtonComponent.css';

const getThemeClass = (isDarkMode, baseClass) => {
  return `${baseClass} ${isDarkMode ? 'dark' : 'light'}`;
};

const PrimaryButton = ({ text, imageSrc, onClick, isDarkMode }) => {
  return (
    <div className={getThemeClass(isDarkMode, 'button-container')}>
      <button
        className={getThemeClass(isDarkMode, 'primary-button')}
        onClick={onClick}
      >
        <img src={imageSrc} alt="icon" className="button-icon" />
      </button>
      <p className={getThemeClass(isDarkMode, 'button-text')}>{text}</p>
    </div>
  );
};

export default PrimaryButton;