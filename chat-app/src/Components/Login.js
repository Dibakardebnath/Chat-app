import React from 'react'
import logo from '../icon/live-chat.png'
import {Button, TextField} from "@mui/material"
export const Login = () => {
  return (
    <div className='login-container'>
    <div className='image-container'>
        <img src={logo} alt='Logo' className='welcome-logo'/>
    </div>
    <div className='login-box'>
        <p className='login-text'>Login to your Account</p>
        <TextField 
        id="standard-basic" 
        label="Enter User Name" 
        variant="outlined"
         />

     <TextField 
        id="outlined-password-input"  
        label="Password" 
        type="Password" 
        autoComplete='current-password' 
         /> 
     <Button variant="outlined">Login</Button>
    </div>
    </div>
  )
}


