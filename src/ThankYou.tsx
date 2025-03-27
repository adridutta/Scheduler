
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, Typography, Box, Button, Avatar } from '@mui/material';

type ChildProps = {
    dateSelected: String;
    timeSelected: String;
    onDoneClick: (state: number) => void; 
};

function ThankYou({dateSelected, timeSelected, onDoneClick}: ChildProps) {
    return (
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
                sx={{ height: '100vh', width: '100%', backgroundColor: 'background.default' }} // Centers the content vertically and horizontally
                >
                    <Card sx={{ maxWidth: 345, margin: "20px auto", backgroundColor: "primary.light" }}>
                        <CardContent>
                            <Typography variant="h5" color = "text.primary">Thank you!</Typography>
                            <Typography variant="body2" color="text.secondary">
                                You are scheduled for {dateSelected} at {timeSelected}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button variant="contained" 
                    color="primary" 
                    onClick={() => onDoneClick(0)}> 
                        Done
                    </Button> 
                </Box>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThankYou