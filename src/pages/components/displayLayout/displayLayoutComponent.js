import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Typography, Box } from '@mui/material';





    const MovableCaption = ({ text }) => {
        const props = useSpring({
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
          reset: true,
          reverse: true,
          config: { duration: 5000 },
          loop: true
        });
      
        return (
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              textAlign: 'center', 
              overflow: 'hidden' 
            }}
          >
            <animated.div style={props}>
              <Typography variant="h6" sx={{ color: 'text.primary' }}>
                {text}
              </Typography>
            </animated.div>
          </Box>
        );
      };



export default MovableCaption;