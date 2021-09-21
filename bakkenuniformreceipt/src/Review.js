import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function ReviewForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tjek at det stemmer:
      </Typography>
      
      <Typography variant="h4" gutterBottom>
        1 str. M Grøn RB Polo
      </Typography>
      
    </React.Fragment>
  );
}