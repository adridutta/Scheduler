import React from 'react';
import { Box, Button} from '@mui/material';
import { useState } from 'react';
import {DateTime} from 'luxon';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';



type ChildProps = {
    onTimeClicked: (state: number, time: string) => void; // `onButtonClick` accepts a string and returns void
};

function TimePicker({onTimeClicked}: ChildProps) {

    const [selectedTime, setSelectedTime] = useState("");

    const startTime = DateTime.fromObject(
        { hour: 8, minute: 0, second: 0 },
        { zone: 'America/New_York' }
    );
    const handleTimeChanged = (time: string) => {
        onTimeClicked(0, time);

    }
    const items =[]
    for(let hour = 0; hour <= 9; hour++) {
        items.push(startTime.plus({hour: hour}).toFormat("hh:mm a"));
    }

    return(
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="flex-start" 
            sx={{ height: '100vh', width: '100%' }}
            >
                <h2 style={{ marginBottom: 0 }}>Pick a Time</h2>
                <h3 style={{ marginTop: 0 }}>All times are EST</h3>
                <List>
                    {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItem onClick = {() => handleTimeChanged(item)}>
                            <ListItemText primary={item}/>
                        </ListItem>
                        {index < items.length - 1 && <Divider />}  {/* Add Divider between items */}
                    </React.Fragment>
                    ))}
                </List>
        </Box>
    );
}

export default TimePicker