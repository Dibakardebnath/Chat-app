import React from 'react'

export const MessageOther = () => {
    var props1={name:"Dibakar",message:"This is a single message"}
  return (
    <div className='other-message-container'>
     <div className='conversation-container'>
     <p className='con-icon'>{props1.name[0]}</p>
     <div className='other-text-container'>
     <p className='con-title'>{props1.name}</p>
     <p className='con-lastMessage'>{props1.message}</p>
     <p className='self-timeStamp'>12:00AM</p>
     </div>
     </div>
    </div>
  )
}

