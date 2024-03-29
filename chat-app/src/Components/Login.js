import React, { useState } from 'react';
import logo from '../icon/live-chat.png';
import {Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Toaster from './Toaster';

export const Login = () => {
 
  const [showLogin,setShowLogin] = useState(false);
 const [data,setData] = useState({name:"",email:"",password:""});
 const [loading,setLoading] = useState(false);

 const [loginStatus,setLoginStatus] = useState("");
 const [signInStatus,setSignInStatus] = useState("");

 const navigate=useNavigate();

 const changeHandler=(e)=>{
  setData({...data,[e.target.name]:e.target.value});
 }

 const loginHandler=async(e)=>{
  console.log("yes")
  setLoading(true);
  console.log(data);
  try {
    const config={
      headers:{
        "Content-Type": "application/json",
      },
    };
    const response=await axios.post(
      "http://localhost:8080/user/login",
      data,
      config
    )
    console.log("login",response);
    setLoginStatus({msg:"success",key:Math.random()});
    setLoading(false);
    localStorage.setItem("userData",JSON.stringify(response));
    navigate("/app/welcome")
  } catch (error) {
    setLoginStatus({msg:"Invalid username and password",
    key:Math.random()
  });
  }
  setLoading(false);
 }

 const signUpHandler=async()=>{
  setLoading(true);
  try {
    const config={
      headers:{
        "Content-Type": "application/json"
      }
    }
    const response=await axios.post(
      "http://localhost:8080/user/register/",
      data,
      config
    );
    console.log(response);
    setSignInStatus({msg:"success",key:Math.random()});
    navigate("/app/welcome")
    localStorage.setItem("userData",JSON.stringify(response))
    setLoading(false);
  } catch (error) {
    console.log(error);
    if(error.response && error.response.status===405){
      setLoginStatus({
        msg:"User with this email ID already Exists",
        key:Math.random()
      })
    } else {
      setLoginStatus({
        msg: "An error occurred while signing up",
        key: Math.random(),
      });
    }
  }
 }


  return (
<>
    <Backdrop
    sx={{color:"#fff", zIndex:(theme)=>theme.zIndex.drawer+1}}
    open={loading}
    >
  <CircularProgress color='secondary' />
    </Backdrop>
    <div className='login-container'>
      <div className='image-container'>
        <img src={logo} alt='Logo' className='welcome-logo'/>
      </div>
      {showLogin && (
      <div className='login-box'>
        <p className='login-text'>Login to your Account</p>
      
          <TextField
            onChange={changeHandler}
            id="standard-basic"
            label="Enter User Name"
            variant="outlined"
            color='secondary'
            name='name'
            helperText=""
          />

        <TextField
        onChange={changeHandler}
          id="standard-basic"
          label="Enter Email Address"
          variant="outlined"
          color='secondary'
          name='email'
        
        />

        <TextField
         onChange={changeHandler}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete='current-password'
          variant="outlined"
          color='secondary'
          name='password'
        />
        
        <Button
        variant='outlined'
        color='secondary'
        onClick={loginHandler}
        isLoading
        >
     Login
        </Button>

        <p>Don't have an Accont ? {" "}
        <span
        className='hyper'
        onClick={()=>{
          setShowLogin(false);
        }}
        >
    Sign up
        </span>
        </p>

        {loginStatus?(
          <Toaster key={loginStatus.key} message={loginStatus} />):null}
          </div>
      )}
        {!showLogin && (
        <div className='login-box'>
        <p className='login-text'>Create your Account</p>
      
          <TextField
            onChange={changeHandler}
            id="standard-basic"
            label="Enter User Name"
            variant="outlined"
            color='secondary'
            name='name'
            helperText=""
          />

        <TextField
        onChange={changeHandler}
          id="standard-basic"
          label="Enter Email Address"
          variant="outlined"
          color='secondary'
          name='email'
        
        />

        <TextField
         onChange={changeHandler}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete='current-password'
          variant="outlined"
          color='secondary'
          name='password'
        />
        
        <Button
        variant='outlined'
        color='secondary'
        onClick={signUpHandler}
       
        >
       Sign Up
        </Button>

        <p>Already have an Accont ? {" "}
        <span
        className='hyper'
        onClick={()=>{
          setShowLogin(true);
        }}
        >
     Log in
        </span>
        </p>

        {signInStatus?(
          <Toaster key={signInStatus.key} message={signInStatus.msg} />
          ):null}
          </div>
        )}
    </div>
    </>
  );
};

