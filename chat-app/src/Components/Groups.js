import React from 'react'
import logo from '../icon/live-chat.png'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import './mainStyle.css';

export const Groups = () => {
    return (
        <div className='list-container'>
         <div className='ug-header'>
            <img src={logo}
            style={{height:"2rem",width:"2rem"}}
            />
            <p className='ug-title'>Available Groups</p>
         </div>
         <div className='sb-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input placeholder='Search' className='search-box'/>
         </div>
         <div className='ug-list'>
           
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            
    
         </div>
    
        </div>
      )
}


