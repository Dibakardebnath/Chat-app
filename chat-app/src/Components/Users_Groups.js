import React, { useEffect, useState } from 'react'
import logo from '../icon/live-chat.png'
import { IconButton } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import './mainStyle.css';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Users_Groups = () => {
    const lightTheme = useSelector((state)=> state.themeKey);
    const [refresh,setRefresh]=useState(true);
    const [users,setUsers]=useState([])
    const userData=JSON.parse(localStorage.getItem('userData'));
    const nav=useNavigate();
    if(!userData){
        console.log("user not Authenticated");
        nav(-1);
    }

    useEffect(()=>{
        console.log("user refreshed");
        const config={
            headers:{
                Authorization: `Bearer ${userData.data.token}`,
            }
        }
        axios.get("http://localhost:8080/user/fetchUsers",config).then((data)=>{
            console.log("user data form API", data);
            setUsers(data.data)
        })
    },[refresh])
    return (
        <AnimatePresence>
           <motion.div
           initial={{opacity:0, scale:0}}
           animate={{opacity:1, scale:1}}
           exit={{opacity:0, scale:0}}
           transition={{
            ease:"anticipate",
            duration:"0.3"
           }}
          className='list-container'>
         <div className={"ug-header" + (lightTheme ?"" : " dark")}>
            <img src={logo}
            alt='img'
            style={{height:"2rem",width:"2rem"}}
            />
            <p className='ug-title'>Online Users</p>
            <IconButton className={"icon"+ (lightTheme?"":"dark")}
            onClick={()=>{
                setRefresh(!refresh)
            }}
            >
                <RefreshIcon/>
            </IconButton>
         </div>
         <div className={"sb-search" + (lightTheme ?"" : " dark")}>
            <IconButton>
                <SearchIcon  className={"icon" + (lightTheme ?"" : " dark")}/>
            </IconButton>
            <input placeholder='Search' className={"search-box" + (lightTheme ?"" : " dark")}/>
         </div>
         <div className={"ug-list" + (lightTheme ?"" : " dark")}>
           {users.map((user,index)=>{
            return(
                <motion.div 
                whileHover={{scale:1.02}}
                whileTap={{scale:0.98}}
                 className={"list-tem" + (lightTheme ?"" : " dark")}
                 key={index}
                 onClick={()=>{
                    console.log("creating chat with", user.name);

                    const config={
                        headers:{
                            Authorization:`Bearer ${userData.data.token}`
                        }
                    };
                    axios.post(
                        "http://localhost:8080/chat/",
                        {
                            userId: user._id,
                        },
                        config
                    )
                 }}
                 >
                
                
                    <p className='con-icon'>{user.name.charAt(0)}</p>
                    <p className='con-title'>{user.name}</p>
                </motion.div>
            )
           })}
            {/* <motion.div 
            whileHover={{scale:1.02}}
            whileTap={{scale:0.98}}
             className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </motion.div>
            <motion.div 
             whileHover={{scale:1.02}}
            whileTap={{scale:0.98}} className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </motion.div>
            <motion.div 
             whileHover={{scale:1.02}}
            whileTap={{scale:0.98}} className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </motion.div>
            <motion.div 
             whileHover={{scale:1.02}}
            whileTap={{scale:0.98}} className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </motion.div>
            <motion.div 
             whileHover={{scale:1.02}}
            whileTap={{scale:0.98}} className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </motion.div> */}
            
    
         </div>
    
        </motion.div>
        </AnimatePresence>
       
      )
}

