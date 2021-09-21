import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
<link rel="stylesheet" href="app.css"></link>

export default function UniformForm() {
  return (
    <React.Fragment>
      
      <p class="DescCountSize">Uniform</p>
        <Typography variant="h8" gutterBottom align="right" class="Gridpadding">
        Grøn RB Polo 
      </Typography>  
        <select class="Antal">
        <option selected disabled>Antal</option>
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select class="Size">
            <option selected disabled>str.</option>
              <option value="">S</option>
              <option value="1">M</option>
              <option value="2">L</option>
              <option value="3">XL</option>
              <option value="3">XXL</option>
              <option value="3">XXXL</option>
              <option value="3">XXXXL</option>


            </select>
    </React.Fragment>
  );
}