import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { Typography } from '@mui/material'
import ControlledComponent from './CalendarComponent';
import { TextField, Button } from '@mui/material';
import SimpleAlert from './AlertComponent';



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

function ClockModal(props) {
  return (
    <div>
      <ControlledComponent />
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                  Clock
              </Typography>
              <TextField placeholder='What did you do today?' value={props.notes} onChange={props.handleNotes} multiline/>
              <br />
              <Button onClick={() => {
                props.handleTask(123);
                props.handleClose();
                console.log(props.notes);
              }}>Save</Button>
              <br />
              <Button variant="contained" color={props.clock ? "success" : "error"} onClick={props.handleClock}> { props.clock ? "Clock In" : "Clock Out" }</Button>
              <SimpleAlert text="Saved!"/>
            </Box>
        </Modal>
    </div>
  )}

export default ClockModal;