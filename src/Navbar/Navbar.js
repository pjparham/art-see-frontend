import React from 'react'
import { NavLink, Nav, NavMenu } from './NavbarComponents'

export default function Navbar() {
  return (
    <Nav>
        <NavLink to="/"><h1>ArtSee</h1></NavLink>
        <NavMenu>
            <NavLink to="/new-piece">
                Add your favorite art
            </NavLink>
        </NavMenu>
    </Nav>
  )
}
