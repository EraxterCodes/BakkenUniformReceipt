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

function getStepContent(step) {
  switch (step) {
    case 0:
      return <EmailForm />;
    case 1:
      return <UniformForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");

  useEffect(() => {
    console.log(firstName)
    console.log(lastName)
    console.log(email)
  },[firstName,lastName,email])

  const handleNext = () => {
    if (activeStep === 0) {
      var firstnameBox = document.getElementById("firstName")
      var lastnameBox = document.getElementById("lastName")
      var emailBox = document.getElementById("Email")
      setFirstName(firstnameBox.value)
      setLastName(lastnameBox.value)
      setEmail(emailBox.value)
      
    }
    if (activeStep === 2) {
      //do Email stuff
      console.log("i did email stuff");

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
                {getStepContent(activeStep)}
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