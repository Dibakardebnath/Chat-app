import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { useSelector } from 'react-redux';

export const CreateGroup = () => {
  const lightTheme = useSelector((state)=> state.themeKey);
  return (
    
    <div className={"createGroups-container" + (lightTheme ?"" : " dark")}>
      <input placeholder='Enter Group Name' className={"search-box" + (lightTheme ?"" : " dark")}/>
      <IconButton>
         <DoneOutlineIcon  className={"icon" + (lightTheme ?"" : " dark")}/>
      </IconButton>
    </div>
  )
}


