import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <NavLink className='nav-bar-link' to="/">
        <div className='nav-logo-container'>
          ArtSee
        </div>
      </NavLink>
      <div className='nav-bar-menu'>
          <NavLink className='nav-bar-link' to="/new-piece">
              Add your favorite art
          </NavLink>
      </div>
    </div>
  )
}
