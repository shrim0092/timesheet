import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert(prop) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      { prop.text }
    </Alert>
  );
}
