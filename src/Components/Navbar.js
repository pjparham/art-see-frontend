import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav-bar'>
        <NavLink className='nav-bar-link' to="/"><h1>ArtSee</h1></NavLink>
        <div className='nav-bar-menu'>
            <NavLink className='nav-bar-link' to="/new-piece">
                Add your favorite art
            </NavLink>
        </div>
    </nav>
  )
}
