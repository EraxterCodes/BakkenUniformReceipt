import * as React from 'react';
import Typography from '@mui/material/Typography';
import Checkout from './Checkout';

export default function ReviewForm(props) {
  var msg = ""
      // Add Polos
      if (props.GreenPoloCount > 0)  { msg += props.GreenPoloCount.toString() + " Grøn polo i str. " + props.GreenPoloSize + "\n" }
      if (props.WhitePoloCount > 0)  { msg += props.WhitePoloCount.toString() + " Hvid polo i str. " + props.WhitePoloSize + "\n" }
      if (props.BlackPoloCount > 0)  { msg += props.BlackPoloCount.toString() + " Sort polo i str. " + props.BlackPoloSize + "\n" }
      //Add Cardigans
      if (props.RedCardiganCount > 0)  { msg += props.RedCardiganCount.toString() + " Rød polo i str. " + props.RedCardiganSize + "\n" }
      if (props.BlueCardiganCount > 0)  { msg += props.BlueCardiganCount.toString() + " Blå polo i str. " + props.BlueCardiganSize + "\n" }
      //Add Sweatshirts
      if (props.BlackSweatshirtCount > 0)  { msg += props.BlackSweatshirtCount.toString() + " Sort sweatshirt i str. " + props.BlackSweatshirtSize + "\n" }
      if (props.GreenSweatshirtCount > 0)  { msg += props.GreenSweatshirtCount.toString() + " Grøn sweatshirt i str. " + props.GreenSweatshirtSize + "\n" }
      //Add Other field
      if (props.OtherField.length > 0) { msg += props.OtherField} 
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tjek at det stemmer:
      </Typography>
     
      <div class ="perserveWhitespace">
        {msg}
      </div>
      
      
    </React.Fragment>
  );
}