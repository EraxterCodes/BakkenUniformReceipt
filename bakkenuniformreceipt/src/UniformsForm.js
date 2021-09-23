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
      
        <p className="DescCountSize">Uniform</p>
        <div className="sizeselector">
          <Typography variant="h8" gutterBottom align="right">
          Polo grøn
        </Typography>
        <div>  
          <select id="GreenPoloCount" className="Antal">
          <option selected disabled>Antal</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select id="GreenPoloSize" className="Antal">
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
        <div className="sizeselector">
          <Typography variant="h8" gutterBottom align="right">
          Polo hvid
        </Typography>
        <div>  
          <select id="WhitePoloCount" className="Antal">
          <option selected disabled>Antal</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select id="WhitePoloSize" className="Antal">
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
        <div className="sizeselector">
          <Typography variant="h8" gutterBottom align="right">
          Polo sort
        </Typography>
        <div>  
          <select id="BlackPoloCount" className="Antal">
          <option selected disabled>Antal</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select id="BlackPoloSize" className="Antal">
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
        <div className="sizeselector">
          <Typography variant="h8" gutterBottom align="right">
          Rød cardigan
        </Typography>
        <div>  
          <select id="RedCardiganCount" className="Antal">
          <option selected disabled>Antal</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select id="RedCardiganSize" className="Antal">
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
        <div className="sizeselector">
          <Typography variant="h8" gutterBottom align="right">
          Blå cardigan
        </Typography>
        <div>  
          <select id="BlueCardiganCount" className="Antal">
          <option selected disabled>Antal</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select id="BlueCardiganSize" className="Antal">
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
        <div className="sizeselector">
          <Typography variant="h8" gutterBottom align="right" >
        Sweatshirt sort
        </Typography>
        <div>  
          <select id="BlackSweatshirtCount" className="Antal">
          <option selected disabled>Antal</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select id="BlackSweatshirtSize" className="Antal">
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
        <div className="sizeselector">
          <Typography variant="h8" gutterBottom align="right" >
        Sweatshirt grøn
        </Typography>
        <div>  
          <select id="GreenSweatshirtCount" className="Antal">
          <option selected disabled>Antal</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select id="GreenSweatshirtSize" className="Antal">
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
        <div className="sizeselector">
          <Typography variant="h8" gutterBottom align="right" >
        Andet skriv tekst:
        
        </Typography>
        </div> 
        <textarea id="OtherItem" rows="4" cols="50"></textarea>
    </React.Fragment>
  );
}