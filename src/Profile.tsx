import profileImage from './assets/react.svg';

import React from 'react';
import { Box, Button, Avatar } from '@mui/material';
import { useState } from 'react';


type ChildProps = {
  onScheduleClick: (state: number) => void; // `onButtonClick` accepts a string and returns void
};

function Profile({onScheduleClick} : ChildProps) {

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="flex-start" 
      sx={{ height: '100vh', width: '100%' }} // Centers the content vertically and horizontally
    >
      {/* Circular Image */}
      <Avatar 
        alt="Profile Image"
        src={profileImage} // Uses the image URL passed as a prop
        sx={{
          width: 200, 
          height: 200, 
          borderRadius: '50%', 
          marginBottom: 2,
          img:{
            objectFit: 'contain',
          },
        }} 
      />
      
      {/* Button Below Image */}
      <Button variant="contained" color="primary" onClick={() => onScheduleClick(1)}>
        Schedule Now!
      </Button>
    </Box>
  );
}

export default Profile