import React from 'react';
import { Typography, Box } from '@mui/material';
import './displayLayoutComponent.css'; // Importe o arquivo CSS

const DisplayLayout = ({ text }) => {
  return (
    <Box className="displayLayout">
      <Typography variant="h6" className="displayLayout-text">
        {text}
      </Typography>
    </Box>
  );
};

export default DisplayLayout;
