import { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import { Input, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import SimpleAlert from './Components/AlertComponent';
import ControlledComponent from './Components/CalendarComponent';
//import ClockModal from './Components/ClockModal';

function App() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = useState(false);
  const [clock, setClockIn] = useState(true);
  const [task, setTask] = useState();
  const [notes, setNotes] = useState("");
  const [date_, setDate] = useState(Date);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClock = () => setClockIn(!clock);
  const handleTask = (prop) => setTask(prop.task);
  const handleNotes = event => {
    setNotes(event.target.value);
   };

  function GetData() {
    fetch('data.json')
    .then((results) => {
      return results.json();
    })
    .then((response) => {
      if(response?.results) {
        console.log(response.results);
      }
    }) 
  }

  function ClockModal() {
  return (
    <div>
      <ControlledComponent />
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                  Clock
              </Typography>
              <TextField placeholder='What did you do today?' value={notes} onChange={handleNotes} multiline/>
              <br />
              <Button onClick={() => {
                handleTask(123);
                handleClose();
                console.log(notes);
              }}>Save</Button>
              <br />
              <Button variant="contained" color={clock ? "success" : "error"} onClick={handleClock}> { clock ? "Clock In" : "Clock Out" }</Button>
              <SimpleAlert text="Saved!"/>
            </Box>
        </Modal>
    </div>
  )}
  
  return (
    <div className="App">
      <GetData />
      <ClockModal />
      <Button onClick={handleOpen} variant='outlined'>Today</Button>
      <Button variant="contained">View</Button>
    </div>
  );
}

export default App;
