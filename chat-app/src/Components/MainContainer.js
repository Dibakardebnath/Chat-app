import React, { useState } from 'react';
import "./mainStyle.css";
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
export const MainContainer=()=>{
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
    return <div className='main-container'>
      <Sidebar/>
    
    <ChatArea props={conversatons[0]}/>
    
    
    </div>
}