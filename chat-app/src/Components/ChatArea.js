import React, { useState } from 'react'
import "./mainStyle.css";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { MessageOther } from './MessageOther';
import { MessageSelf } from './MessageSelf';
import { useSelector } from 'react-redux';

export const ChatArea = () => {
  const lightTheme = useSelector((state)=> state.themeKey);
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

let props=conversatons[0]

  return (
    <div className='chatarea-container'>
      <div className={"chatArea-header" + (lightTheme ?"" : " dark")}>
      <p className='con-icon'>{props.name[0]}</p>
     <div className='header-text'>
     <p className='con-title'>{props.name}</p>
    <p className='con-timeStamp'>{props.timeStamp}</p>
     </div>
     <IconButton>
     <DeleteIcon/>
     </IconButton>
        
    </div>
  

      <div className={"message-container" + (lightTheme ?"" : " dark")}>
        <MessageOther/>
        <MessageSelf/>
        <MessageOther/>
        <MessageSelf/>
        <MessageOther/>
        <MessageSelf/>
        <MessageOther/>
        <MessageSelf/>
      </div>



      <div className={"text-input-area" + (lightTheme ?"" : " dark")}>
        <input placeholder='Type a Message' className={"search-box" + (lightTheme ?"" : " dark")}/>
        <IconButton>
       <SendIcon/>
     </IconButton>
      </div>
    </div>
  )
}


