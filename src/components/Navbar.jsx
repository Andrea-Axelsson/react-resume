import React from 'react'
import '../styles/Navbar.css'
import { NavLink} from 'react-router-dom'

import {buttonToggle} from '../features/toggleMode/toggleMode.js'
import { useSelector } from 'react-redux';
import classNames from 'classnames'

const Navbar = () => {
    
    const button = useSelector(state => state.toggleMode.buttonToggle)
    

  return (
    <nav className='navbar'>

        <div className='nav-link-container'>
            <NavLink
                to="/"
                
                className={({ isActive }) => 
                    classNames('nav-link', { 'active': isActive, 'dark': button })
                }
                >
                About
            </NavLink>
            <div className='hover-line'></div>
                
        </div>

        <div className='nav-link-container'>
            <NavLink
                to="/projects"
                className={({ isActive }) => 
                    classNames('nav-link', { 'active': isActive, 'dark': button })
                }
                >
                    Projects
            </NavLink>
            <div className='hover-line'></div>
            
        </div>

        <div className='nav-link-container'>
            <NavLink
                to="/contact"
                className={({ isActive }) => 
                    classNames('nav-link', { 'active': isActive, 'dark': button })
                }
                >
                Contact
            </NavLink>
            <div className='hover-line'></div>
            
        </div>
        
    </nav>
  )
}

export default Navbar