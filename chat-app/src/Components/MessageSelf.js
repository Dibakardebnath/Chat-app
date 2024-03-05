import React from 'react'
import { useSelector } from 'react-redux';

 export const MessageSelf = () => {
  const lightTheme = useSelector((state)=> state.themeKey);
    var props2={name:"You",message:"This is my message"}
  return (
    <div className={"self-message-container" + (lightTheme ?"" : " dark")}>
      <div className='messageBox'>
       <p>{props2.message}</p>
       <p className='self-timeStamp'>12:00Am</p>
      </div>
    </div>
  )
}

