import React from 'react';
import Icon from '@mui/material/Icon';
import './primaryButtonComponent.css';


const PrimaryButton = ({ text, icon, onClick }) => {
  return (
    <div className='button-container'>
      <button
        className='primary-button'
        onClick={onClick}
      >
        <span class="material-symbols-outlined">{icon}</span>
      </button>
      <p className='button-text'>{text}</p>
    </div>
  );
};

export default PrimaryButton;