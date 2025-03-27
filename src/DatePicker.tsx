import React from 'react';
import { Box, Button, Card, CardContent} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { motion, AnimatePresence } from 'framer-motion';


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
            onDateClick(2, selectedDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }));
        }
    }

    let minDate = new Date();
    minDate.setDate(new Date().getDate() + 2);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

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
              sx={{ height: '100vh', width: '100%' }}
            >
                <h2 color = 'text.primary'>Let's start by picking a date 📅</h2>
                  <Card sx={{ maxWidth: 345, margin: "20px auto", backgroundColor: "primary.light" }}>
                    <CardContent>
                      <DateCalendar
                        onChange={handleDateChange}
                        minDate={minDate}
                        sx = {{backgroundColor: 'primary'}} 
                      />
                    </CardContent>
                  </Card>
                <Button variant="contained" color="primary" onClick={handleSelectDate}>
                    Next
                </Button>
            </Box>
          </motion.div>
        </AnimatePresence>
    </LocalizationProvider>
  );
}

export default CustomDatePicker