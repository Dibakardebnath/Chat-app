import React, { useState } from 'react';
import "./mainStyle.css";
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
import {Users_Groups} from './Users_Groups'
import { Welcome } from './Welcome';
import { CreateGroup } from './CreateGroup';
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
    {/* <CreateGroup/> */}
    {/* <ChatArea props={conversatons[0]}/> */}
    {/* <Welcome/> */}
    <Users_Groups/>
    </div>
}