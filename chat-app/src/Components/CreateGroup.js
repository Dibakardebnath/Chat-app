import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export const CreateGroup = () => {
  return (
    <div className='createGroups-container'>
      <input placeholder='Enter Group Name' className='search-box'/>
      <IconButton>
         <DoneOutlineIcon/>
      </IconButton>
    </div>
  )
}


