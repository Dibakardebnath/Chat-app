import React from 'react'
import logo from '../icon/live-chat.png'

export const Welcome = () => {
  return (
    <div className='welcome-container'>
      <img src={logo} alt='logo' className='welcome-logo'/>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  )
}


