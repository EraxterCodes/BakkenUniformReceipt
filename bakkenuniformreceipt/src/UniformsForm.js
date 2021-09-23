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
        <div class="sizeselector">
          <Typography variant="h8" gutterBottom align="right" class="Gridpadding">
          Grøn RB Polo 
        </Typography>
        <div>  
          <select class="Antal">
          <option selected disabled>Antal</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select class="Antal">
              <option selected disabled>str.</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>


              </select>
              </div>
        </div>
    </React.Fragment>
  );
}