import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailForm from './EmailForm';
import UniformForm from './UniformsForm';
import Review from './Review';
import * as emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_5X1e4mj64MdMbEzNraSrN");



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://bakken.dk/">
      A/S Dyrehavsbakken
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Email', 'Tøj', 'Gennemse'];

function getStepContent(step,GreenPoloCount,GreenPoloSize,BlackPoloCount,BlackPoloSize,WhitePoloCount,WhitePoloSize,BlueCardiganCount,
                        BlueCardiganSize,RedCardiganCount,RedCardiganSize,BlackSweatshirtCount,BlackSweatshirtSize,
                        GreenSweatshirtCount,GreenSweatshirtSize,OtherField) {
  switch (step) {
    case 0:
      return <EmailForm />;
    case 1:
      return <UniformForm />;
    case 2:
      return<Review 
      GreenPoloCount={GreenPoloCount} GreenPoloSize={GreenPoloSize} BlackPoloCount={BlackPoloCount} BlackPoloSize={BlackPoloSize}
      WhitePoloCount={WhitePoloCount} WhitePoloSize={WhitePoloSize} BlueCardiganCount={BlueCardiganCount} BlueCardiganSize={BlueCardiganSize}
      RedCardiganCount={RedCardiganCount} RedCardiganSize={RedCardiganSize}BlackSweatshirtCount={BlackSweatshirtCount}
      BlackSweatshirtSize={BlackSweatshirtSize} GreenSweatshirtCount={GreenSweatshirtCount}
      GreenSweatshirtSize={GreenSweatshirtSize} OtherField={OtherField}/>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();



export default function Checkout(props) {
  const [activeStep, setActiveStep] = React.useState(0); //Controll page number
  
  
    /* Email states */
    const [firstName, setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    
    /* Polo states */
    const [GreenPoloCount,setGreenPoloCount] = useState(0);
    const [GreenPoloSize,setGreenPoloSize] = useState("");
    const [BlackPoloCount,setBlackPoloCount] = useState(0);
    const [BlackPoloSize,setBlackPoloSize] = useState("");
    const [WhitePoloCount,setWhitePoloCount] = useState(0);
    const [WhitePoloSize,setWhitePoloSize] = useState("");
  
    /* Cardigan states */
    const [RedCardiganCount,setRedCardiganCount] = useState(0);
    const [RedCardiganSize,setRedCardiganSize] = useState("");
    const [BlueCardiganCount,setBlueCardiganCount] = useState(0);
    const [BlueCardiganSize,setBlueCardiganSize] = useState("");
  
    /* Sweatshirt states */
    const [BlackSweatshirtCount,setBlackSweatshirtCount] = useState(0);
    const [BlackSweatshirtSize,setBlackSweatshirtSize] = useState("");
    const [GreenSweatshirtCount,setGreenSweatshirtCount] = useState(0);
    const [GreenSweatshirtSize,setGreenSweatshirtSize] = useState("");
  
    /* Other states */
    const [OtherField,setOtherField] = useState("");

  const handleNext = () => {
    if (activeStep === 0) {
      let firstnameBox = document.getElementById("firstName")
      var lastnameBox = document.getElementById("lastName")
      var emailBox = document.getElementById("Email")
      setFirstName(firstnameBox.value)
      setLastName(lastnameBox.value)
      setEmail(emailBox.value)
    }
    if (activeStep === 1) {

      /* Green Polo state updates */
      var GreenpoloCountSelector = document.getElementById("GreenPoloCount")
      var GreenPoloSizeSelector = document.getElementById("GreenPoloSize")
      setGreenPoloCount(GreenpoloCountSelector.value)
      setGreenPoloSize(GreenPoloSizeSelector.value)

      /* Black Polo state updates */
      var BlackpoloCountSelector = document.getElementById("BlackPoloCount")
      var BlackPoloSizeSelector = document.getElementById("BlackPoloSize")
      setBlackPoloCount(BlackpoloCountSelector.value)
      setBlackPoloSize(BlackPoloSizeSelector.value)

      /* White Polo state updates */
      var WhitepoloCountSelector = document.getElementById("WhitePoloCount")
      var WhitePoloSizeSelector = document.getElementById("WhitePoloSize")
      setWhitePoloCount(WhitepoloCountSelector.value)
      setWhitePoloSize(WhitePoloSizeSelector.value)

      /* Blue Cardigan state updates */
      var BlueCardiganCountSelector = document.getElementById("BlueCardiganCount")
      var BlueCardiganSizeSelector = document.getElementById("BlueCardiganSize")
      setBlueCardiganCount(BlueCardiganCountSelector.value)
      setBlueCardiganSize(BlueCardiganSizeSelector.value)

      /* Red Cardigan state updates */
      var RedCardiganCountSelector = document.getElementById("RedCardiganCount")
      var RedCardiganSizeSelector = document.getElementById("RedCardiganSize")
      setRedCardiganCount(RedCardiganCountSelector.value)
      setRedCardiganSize(RedCardiganSizeSelector.value)

      /* Green Sweatshirt state updates */
      var GreenSweatshirtCountSelector = document.getElementById("GreenSweatshirtCount")
      var GreenSweatshirtSizeSelector = document.getElementById("GreenSweatshirtSize")
      setGreenSweatshirtCount(GreenSweatshirtCountSelector.value)
      setGreenSweatshirtSize(GreenSweatshirtSizeSelector.value)

      /* Black Sweatshirt state updates */
      var BlackSweatshirtCountSelector = document.getElementById("BlackSweatshirtCount")
      var BlackSweatshirtSizeSelector = document.getElementById("BlackSweatshirtSize")
      setBlackSweatshirtCount(BlackSweatshirtCountSelector.value)
      setBlackSweatshirtSize(BlackSweatshirtSizeSelector.value)

      //Other text area state update
      var OtherItemSelector = document.getElementById("OtherItem")
      setOtherField(OtherItemSelector.value)


    }
    if (activeStep === 2) {
      var msg = ""
      // Add Polos
      if (GreenPoloCount > 0)  { msg += GreenPoloCount.toString() + " Grøn polo i str. " + GreenPoloSize + "\n" }
      if (WhitePoloCount > 0)  { msg += WhitePoloCount.toString() + " Hvid polo i str. " + WhitePoloSize + "\n" }
      if (BlackPoloCount > 0)  { msg += BlackPoloCount.toString() + " Sort polo i str. " + BlackPoloSize + "\n" }
      //Add Cardigans
      if (RedCardiganCount > 0)  { msg += RedCardiganCount.toString() + " Rød polo i str. " + RedCardiganSize + "\n" }
      if (BlueCardiganCount > 0)  { msg += BlueCardiganCount.toString() + " Blå polo i str. " + BlueCardiganSize + "\n" }
      //Add Sweatshirts
      if (BlackSweatshirtCount > 0)  { msg += BlackSweatshirtCount.toString() + " Sort sweatshirt i str. " + BlackSweatshirtSize + "\n" }
      if (GreenSweatshirtCount > 0)  { msg += GreenSweatshirtCount.toString() + " Grøn sweatshirt i str. " + GreenSweatshirtSize + "\n" }
      //Add Other field
      if (OtherField.length > 0) { msg += OtherField} 
      
      emailjs.send("service_pj1jvly","template_37lgn28",{
        to_name: firstName + " " + lastName,
        message: msg,
        reciver_email: email,
        });
      
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Bakken A/S
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Tøjkvittering 
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Email sent
                </Typography>

              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep,GreenPoloCount,GreenPoloSize,BlackPoloCount,BlackPoloSize,WhitePoloCount,WhitePoloSize,BlueCardiganCount,
                        BlueCardiganSize,RedCardiganCount,RedCardiganSize,BlackSweatshirtCount,BlackSweatshirtSize,
                        GreenSweatshirtCount,GreenSweatshirtSize,OtherField)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Tilbage
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Send email' : 'Næste'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
