//import React from 'react';
import React, { useState } from 'react';
import './headerComponent.css';
import { ReactComponent as LightModeIcon } from '../../assets/images/lightMode.svg'; // Ajuste o caminho conforme necessário
import { ReactComponent as DarkModeIcon } from '../../assets/images/darkMode.svg'; // Ícone para o modo claro

function Header() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);//para controlar o icon

  const handleButtonClick = () => {
    setIsDarkMode(!isDarkMode); // Alterna o tema no click
    alert('Aqui vai a função de trocar pro darkmode');
  };

  return (
    <nav>
      <header className="header">
        <h1>HOORTECH</h1>
        <button className="icon-button" onClick={handleButtonClick}>
        {isDarkMode ? <DarkModeIcon className="icon" /> : <LightModeIcon className="icon" />}
        </button>
        <p>{}</p>
      </header>
    </nav>
  );
}

export default Header;