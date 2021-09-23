import logo from './logo.svg';
import './App.css';
import './EmailForm'
import EmailForm from './EmailForm';
import Checkout from './Checkout';
import React, { useState } from 'react';

function NameState() {
  const [firstName, setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  //const [RBPolo,setRBPolo] = useState(0);
  //const [RBPoloSize,setRBPoloSize] = useState("");

  var firstNameBox = document.getElementById("firstName")
  var lastNameBox = document.getElementById("firstName")
  var emailBox = document.getElementById("firstName")
  
  setFirstName(firstNameBox.value)
  setLastName(lastNameBox.value)
  setEmail(emailBox.value)
}

function App() {
  return (
    Checkout()
  );
}

export default App;
