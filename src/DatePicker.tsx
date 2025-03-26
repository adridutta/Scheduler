import React from 'react';
import { Box, Button} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


type ChildProps = {
  onDateClick: (state: number, date: string) => void; // `onButtonClick` accepts a string and returns void
};

function CustomDatePicker({onDateClick} : ChildProps) {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      }
    const handleSelectDate = () => {
        if(selectedDate) {
            onDateClick(2, selectedDate.toLocaleDateString());
        }
    }

    let minDate = new Date();
    minDate.setDate(new Date().getDate() + 2);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="flex-start" 
            sx={{ height: '100vh', width: '100%' }}
            >
                <h2>Pick a Date</h2>
                <DateCalendar
                    onChange={handleDateChange}
                    minDate={minDate} 
                />
                <Button variant="contained" color="primary" onClick={handleSelectDate}>
                    Next
                </Button>
        </Box>
    </LocalizationProvider>
  );
}

export default CustomDatePicker