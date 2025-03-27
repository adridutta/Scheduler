// Write script on how to install on gitlab
// Installation of React app
// Installation of MUI ui https://mui.com/system/getting-started/installation/


import { useEffect, useState } from 'react'
import './App.css'
import Profile from './Profile'
import CustomDatePicker from './DatePicker'
import TimePicker from './TimePicker'
import ThankYou from './ThankYou'
import axios from 'axios'
import { Box, ThemeProvider, CssBaseline, Button } from '@mui/material';
import theme from './theme/theme'; // Import the predefined theme
import soundFile from './assets/country_road.mp3'
import { motion } from 'framer-motion';

type ParentProps = {
  onButtonClick: (state: number) => void; // `onButtonClick` accepts a string and returns void
};

export let ACCESS_TOKEN = "";

const api = axios.create({
  baseURL: "https://orgfarm-eb59912ff7-dev-ed.develop.my.salesforce.com/services/oauth2/token"
})

function App() {
  const PROFILE = 0;
  const DATE_PICKER = 1;
  const TIME_PICKER = 2;
  const THANK_YOU = 3;
  const [state, setState] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [audio] = useState(new Audio(soundFile));

  // Move to better location
  useEffect(() => {
    async function fetchAccessToken() {
      const formData = new FormData()
      formData.append("Content-Type", "application/x-form-urlencoded");
      formData.append("grant_type", "password");
      formData.append("client_id", "3MVG9rZjd7MXFdLipIryoFLMqazKF8mkfIkKRgincfgsKq7SzQKyhZ0fU214OLpPZaKYiHwpKUqYhYHsumQ96");
      formData.append("client_secret", "FC2C359E0A9B576044A6F5D5D2EABE1416BABB401714E13100E94A8940DA838C");
      formData.append("username", "duttaadri2014536@agentforce.com");
      formData.append("password", "Dy759782@@SpyPIoylP2OgEbcDMDYBCeazpA");
      try {
        const res = await api.post("", formData);
        ACCESS_TOKEN = res.data.access_token;
      }
      catch(error) {}
    }
    fetchAccessToken();
  },[])



  const handleScheduleClick = (updatedState: number) => {
    audio.play();
    setState(updatedState);
  };

  const handleDateClick = (updatedState: number, date: string) => {
    setState(updatedState);
    setDate(date); // m/d/yyyy
  };
  const handleTimeClick = (updatedState: number, time: string) => {
    setState(updatedState);
    setTime(time);
  };

  const uiState = () => {
    switch(state) {
      case PROFILE:
        return <Profile onScheduleClick = {handleScheduleClick}/>
      case DATE_PICKER:
        return <CustomDatePicker onDateClick = {handleDateClick}/>
      case TIME_PICKER:
        return <TimePicker dateSelected = {date} onTimeClicked = {handleTimeClick}/>
      case THANK_YOU:
        return <ThankYou dateSelected = {date} timeSelected = {time} onDoneClick = {(number) => setState(number)}/>
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{ height: '100vh', width: '100%', backgroundColor: 'background.default' }}>
        {uiState()}
      </Box>

    </ThemeProvider>
  );
}

export default App

// "scripts": {
//   "dev": "vite",
//   "build": "tsc && vite build",
//   "preview": "vite preview"
// }
