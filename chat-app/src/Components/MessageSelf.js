import React from 'react'

 export const MessageSelf = () => {
    var props2={name:"You",message:"This is my message"}
  return (
    <div className='self-message-container'>
      <div className='messageBox'>
       <p>{props2.message}</p>
       <p className='self-timeStamp'>12:00Am</p>
      </div>
    </div>
  )
}

