import React from 'react';
import { Box, Button, Card, CardContent} from '@mui/material';
import { useState, useEffect } from 'react';
import {DateTime} from 'luxon';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import axios from 'axios'
import {ACCESS_TOKEN} from './App'
import { motion, AnimatePresence } from 'framer-motion';

const getTimesApi = axios.create({
    baseURL: "https://orgfarm-eb59912ff7-dev-ed.develop.my.salesforce.com/services/apexrest"
})

const putDateAndTimeApi = axios.create({
    baseURL: "https://orgfarm-eb59912ff7-dev-ed.develop.my.salesforce.com/services/apexrest/putTimes"
})


type ChildProps = {
    onTimeClicked: (state: number, time: string) => void; // `onButtonClick` accepts a string and returns void
    dateSelected: String
};

function TimePicker({onTimeClicked, dateSelected}: ChildProps) {

    const startTime = DateTime.fromObject(
        { hour: 8, minute: 0, second: 0 },
        { zone: 'America/New_York' }
    );
    const handleTimeChanged = (time: string) => {
        async function putDateAndTime() {
            try{
                const response = await putDateAndTimeApi.post('', {
                    "scheduledDate": dateSelected,
                    "scheduledTime": time
                }, 
                { headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`
                    }
                }
            )}
            catch (error) {}
        }
        putDateAndTime();
        onTimeClicked(3, time);
    }

    const [availableTimes, setAvailableTimes] = useState<string[]>([]);

    useEffect(() => {
        async function fetchTimes() {
            try {
                const response = await getTimesApi.get(`getTimes?dateOfSchedule=${dateSelected}`, {
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`
                    }
                })
                const unavailableTimes = response.data.scheduledTimes;
                const items = [];
                for(let hour = 0; hour <= 9; hour++) {
                    let timeToShow = startTime.plus({hour: hour}).toFormat("hh:mm a");
                    if(unavailableTimes.includes(timeToShow) == false) {
                        items.push(timeToShow)
                    }
                }
                setAvailableTimes(items);
            }
            catch(error) {}
        }
        fetchTimes();
    },[])

    return(

        <AnimatePresence mode="wait"> 
            <motion.div
            initial={{ opacity: 0, y: 0 }}
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
                    <h2 style={{ marginBottom: 0 }}>Pick a time that works for you ⏰</h2>
                    <h3 style={{ marginTop: 0 }}>Remember all times are in EST</h3>
                    <List>
                        {availableTimes.map((item, index) => (
                        <React.Fragment key={index}>
                            <Card sx={{ maxWidth: 345, margin: "20px auto", backgroundColor: "primary.light" }}>
                                <CardContent>
                                    <ListItem onClick = {() => handleTimeChanged(item)} sx={{ cursor: 'pointer' }}>
                                        <ListItemText primary={item}/>
                                    </ListItem>
                                </CardContent>
                            </Card>
                        </React.Fragment>
                        ))}
                    </List>
                </Box>
            </motion.div>
        </AnimatePresence>
    );
}

export default TimePicker