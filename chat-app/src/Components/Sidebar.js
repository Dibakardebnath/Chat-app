import React, { useState } from 'react'
import "./mainStyle.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { ConversationItem } from './ConversationItem';
export const Sidebar = () => {
    const [conversatons,setConversations]=useState([
        {
            name:"Test#1",
            lastMessage:"Last Message #1",
            timeStamp:"today"
        },
        {
            name:"Test#2",
            lastMessage:"Last Message #2",
            timeStamp:"today"
        },
        {
            name:"Test#3",
            lastMessage:"Last Message #3",
            timeStamp:"today"
        },
    ])
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>

        <div>
        <IconButton>
        <AccountCircleIcon/>
        </IconButton>
        </div>
       
  <div>
  <IconButton><PersonAddIcon/></IconButton>
        <IconButton><GroupAddIcon/></IconButton>
        <IconButton><AddCircleIcon/></IconButton>
        <IconButton><Brightness4Icon/></IconButton>
      
  </div>

     
  </div>
      <div className='sb-search'>
        <IconButton>
        <SearchIcon/>
        </IconButton>
     
      <input placeholder='search' className='search-box'/>
        
        </div>
      <div className='sb-conversations'>
        {conversatons.map((conversaton)=>{
            return  <ConversationItem props={conversaton}/>
        })}
       
      </div>

    </div>
  )
}

