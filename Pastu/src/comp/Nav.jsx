import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav
 = () => {
  return (
    <div id='nav'>
        <NavLink to='/' className="logo"></NavLink>
        <div className="opt">
            <NavLink to='/' className='navopt' >
              Home
            </NavLink>
            <NavLink to='/pastes' className='navopt'>
                Pastes
            </NavLink>
            <NavLink to='/about-us' className='navopt'>
                About us
            </NavLink>
        </div>
    </div>
  )
}

export default Nav
