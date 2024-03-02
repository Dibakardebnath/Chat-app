import React from 'react';
import "./mainStyle.css";
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
export const MainContainer=()=>{
    return <div className='main-container'>
      <Sidebar/>
      <ChatArea/>
    </div>
}