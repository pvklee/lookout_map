import React from 'react'
import {Link} from 'react-router-dom'

export default ({currentUser, logout}) => {
  const display = currentUser ? 
        <div className="header-greeting-content">
          <span class="header-greeting-text">Hello {currentUser.username}!</span>
          <button class="session-button" onClick={logout}>Log Out</button>
        </div>
    : 
        <div className="header-greeting-content">
          <span class="header-greeting-text">Hello!</span>
          <Link to='/signup'><button class="session-button">Sign Up</button></Link>
          <Link to='/login'><button class="session-button">Log In</button></Link>  
        </div>

  return(
    <div>
      {display}
    </div>
  )
}
