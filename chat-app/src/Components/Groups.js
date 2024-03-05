import React from 'react'
import logo from '../icon/live-chat.png'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import './mainStyle.css';
import { useSelector } from 'react-redux';

export const Groups = () => {
    const lightTheme = useSelector((state)=> state.themeKey);
    return (
        <div className='list-container'>
         <div className={"ug-header" + (lightTheme ?"" : " dark")}>
            <img src={logo}
            style={{height:"2rem",width:"2rem"}}
            />
            <p className='ug-title'>Available Groups</p>
         </div>
         <div className={"sb-search" + (lightTheme ?"" : " dark")}>
            <IconButton>
                <SearchIcon  className={"icon" + (lightTheme ?"" : " dark")}/>
            </IconButton>
            <input placeholder='Search' className={"search-box" + (lightTheme ?"" : " dark")}/>
         </div>
         <div className={"ug-list" + (lightTheme ?"" : " dark")}>
           
            <div className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className={"list-tem" + (lightTheme ?"" : " dark")}>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            
    
         </div>
    
        </div>
      )
}


