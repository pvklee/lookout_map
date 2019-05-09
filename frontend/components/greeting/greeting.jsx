import React from 'react'
import {Link} from 'react-router-dom'

export default ({currentUser, logout}) => {
  const display = currentUser ? 
      <div>      
        <span>Hello {currentUser.username} </span>
        <button onClick={logout}>Log Out</button>
      </div>
    : 
      <div>
        <span>Hello </span>
        <Link to='/signup'>Sign up</Link>
        <span> </span>
        <Link to='/login'>Log in</Link>
      </div>

  return(
    <div>
      {display}
    </div>
  )
}
