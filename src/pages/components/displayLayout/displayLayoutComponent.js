import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Typography, Box } from '@mui/material';
import './displayLayoutComponent.css'; // Importe o arquivo CSS

const MovableCaptionComponent = ({ text }) => {
  const props = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' },
    reset: true,
    reverse: true,
    config: { duration: 5000 },
    loop: true
  });

  return (
    <Box className="movable-caption-container">
      <animated.div style={props}>
        <Typography variant="h6" className="movable-caption-text">
          {text}
        </Typography>
      </animated.div>
    </Box>
  );
};

export default MovableCaptionComponent;