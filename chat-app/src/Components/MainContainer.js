import React, { useState } from 'react';
import "./mainStyle.css";
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
import {Users_Groups} from './Users_Groups'
import { Welcome } from './Welcome';
import { CreateGroup } from './CreateGroup';
import { Outlet } from 'react-router-dom';
export const MainContainer=()=>{
 
    return <div className='main-container'>
      <Sidebar/>
      <Outlet/>
    {/* <CreateGroup/> */}
    {/* <ChatArea props={conversatons[0]}/> */}
    {/* <Welcome/> */}
    {/* <Users_Groups/> */}
    </div>
}