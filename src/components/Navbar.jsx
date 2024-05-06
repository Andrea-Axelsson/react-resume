import React from 'react'
import '../styles/Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import { isAction } from '@reduxjs/toolkit'

/* Conditionally render the blue line, 
both in active mode and in hover state 
*/

const Navbar = () => {

    const location = useLocation()

  return (
    <nav className='navbar'>

        <div className='nav-link-container'>
            <NavLink
                to="/"
                
                className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                About
            </NavLink>
            <div className='hover-line'></div>
                {/* {location.pathname === '/' && <div className='hover-line'></div>} */}
        </div>

        <div className='nav-link-container'>
            <NavLink
                to="/projects"
                className='nav-link'
                >
                    Projects
            </NavLink>
            <div className='hover-line'></div>
            {/* {location.pathname === '/projects' && <div className='hover-line'></div>} */}
        </div>

        <div className='nav-link-container'>
            <NavLink
                to="/contact"
                className='nav-link'
                >
                Contact
            </NavLink>
            <div className='hover-line'></div>
            {/* {location.pathname === '/contact' && <div className='hover-line'></div>} */}
        </div>
        
    </nav>
  )
}

export default Navbar