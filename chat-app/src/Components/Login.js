import React, { useState } from 'react';
import logo from '../icon/live-chat.png';
import { Button, TextField } from "@mui/material";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='login-container'>
      <div className='image-container'>
        <img src={logo} alt='Logo' className='welcome-logo'/>
      </div>
      <div className='login-box'>
        <p className='login-text'>{isSignUp ? 'Sign Up for an Account' : 'Login to your Account'}</p>
        {isSignUp && (
          <TextField
            id="standard-basic"
            label="Enter Your Name"
            variant="outlined"
          />
        )}
        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="outlined"
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete='current-password'
          variant="outlined"
        />
        <div className="signup-question">
          {!isSignUp && (
            <p>
              Are you already created an account? 
              <Button variant="text" color="primary" onClick={toggleSignUp}>
                Sign Up
              </Button>
            </p>
          )}
        </div>

       {!isSignUp && (<Button variant="outlined">login</Button>)} 
        {isSignUp && (
          <Button variant="outlined" onClick={toggleSignUp}>
            sign up
          </Button>
        )}
      </div>
    </div>
  );
};
