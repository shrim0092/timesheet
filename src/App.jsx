import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import ClockModal from './Components/ClockModal';
import ViewComponent from './Components/ViewComponent';

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
  
  const [user, setUser] = useState("n1");
  const [open, setOpen] = useState(false);
  const [clock, setClockIn] = useState(true);
  const [task, setTask] = useState();
  const [notes, setNotes] = useState("");
  const [date_, setDate] = useState(new Date().getMonth()+1 + "/" + new Date().getDate() + "/" + new Date().getFullYear());
  const [view, setView] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClock = () => setClockIn(!clock);
  const handleTask = (prop) => setTask(prop.task);
  const handleNotes = event => {
    setNotes(event.target.value);
  };
  const handleViewShow = () => setView(true);

  const [d, setD] = React.useState(null);

  function debounce(func, timeout=1000)
  {
    let timer;
    return function() {
      clearTimeout(timer);
      timer=setTimeout(()=>{
        func();
      }, timeout);
    }
  }
  
  //const optimizedGetData = debounce(GetData, 2000);
  //setDate("06/06/2024");
  //debounce(()=> {console.log(notes)}, 2000);
  return (
    <div className="App">
      <ClockModal open={open} handleClose={handleClose} notes={notes} handleNotes={handleNotes} handleTask={handleTask} clock={clock} handleClock={handleClock}/>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker onChange={(newValue) => setDate(newValue.$M+1 + "/" + newValue.$D + "/" + newValue.$y)}/>
      </DemoContainer>
    </LocalizationProvider>
      <Button onClick={handleOpen} variant='outlined'>Today</Button>
      <Button variant="contained" onClick={handleViewShow}>View</Button>
      {view &&
        <ViewComponent name={user} date={date_}/>
      }
    </div>
  );
}

export default App;
