import profileImage from './assets/react.svg';

import React from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';


type ChildProps = {
  onScheduleClick: (state: number) => void; // `onButtonClick` accepts a string and returns void
};

function Profile({onScheduleClick} : ChildProps) {
    //src={profileImage}
  return (
    <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          style={{ marginTop: 10, padding: 20}}
        >
          
          <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="flex-start" 
            sx={{ height: '100vh', width: '100%', backgroundColor: 'background.default' }} // Centers the content vertically and horizontally
          >

              <Avatar 
                alt="Profile Image"
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

              <Card sx={{ maxWidth: 345, margin: "20px auto", backgroundColor: "primary.light" }}>
                    <CardContent>
                      <Typography variant="h5" color = "text.primary">Hi, I am Sonjoy 👋</Typography>
                      <Typography variant="body2" color="text.secondary">
                        I am a Certified Public Accountant (CPA), and currently reside in Atlanta Georgia! If you would like to receive some consultation, please click the button below. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                      </Typography>
                    </CardContent>
              </Card>
              <Button variant="contained" 
                color="primary" 
                onClick={() => onScheduleClick(1)}> 
                  Schedule Now!
              </Button>
          </Box>
        </motion.div>
  </AnimatePresence>
  );
}

export default Profile