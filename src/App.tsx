// Write script on how to install on gitlab
// Installation of React app
// Installation of MUI ui https://mui.com/system/getting-started/installation/


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './Profile'
import CustomDatePicker from './DatePicker'
import TimePicker from './TimePicker'

type ParentProps = {
  onButtonClick: (state: number) => void; // `onButtonClick` accepts a string and returns void
};

function App() {
  const PROFILE = 0;
  const DATE_PICKER = 1;
  const TIME_PICKER = 2;
  const [state, setState] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleScheduleClick = (updatedState: number) => {
    setState(updatedState);
  };

  const handleDateClick = (updatedState: number, date: string) => {
    setState(updatedState);
    setDate(date);
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
        return <TimePicker onTimeClicked = {handleTimeClick}/>
    }
  }

  return (
    <div className="App">
      {uiState()}
    </div>
  )
}

export default App
