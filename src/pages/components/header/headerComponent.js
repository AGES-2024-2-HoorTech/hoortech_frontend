import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"; // Ícone de lua (modo escuro)
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"; // Ícone de sol (modo claro)
import IconButton from "@mui/material/IconButton"; // Importa o componente de botão do Material UI
import React from "react";
import "./headerComponent.css";

function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <h1 className="header-title">HOORTECH</h1>
      <IconButton className="icon-button" onClick={toggleTheme}>
        {theme === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    </header>
  );
}

export default Header;
