import React from 'react'
import '../styles/Navbar.css'
import { NavLink} from 'react-router-dom'

import {buttonToggle} from '../features/toggleMode/toggleMode.js'
import { useSelector } from 'react-redux';
import classNames from 'classnames'

const Navbar = () => {
    
    // Hämtar knappens tillstånd från Redux-store för att bestämma temat.
    const button = useSelector(state => state.toggleMode.buttonToggle)
    

  return (
    <nav className='navbar'>
 {/* Loopar igenom flera NavLink-komponenter som var och en representerar en länk i navigeringsfältet */}
        <div className='nav-link-container'>
            <NavLink
                to="/"
                
                className={({ isActive }) => 
                    classNames('nav-link', { 'active': isActive, 'dark': button })
                }
                /* // Tilldelar dynamiskt 'nav-link' som grundklass.
                // Klassen 'active' läggs till när NavLink är den aktuella aktiva rutten (när 'isActive' är true).
                // Klassen 'dark' läggs till baserat på 'button'-tillståndet från Redux, vilket kan växla mellan teman som mörkt eller ljust. */
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