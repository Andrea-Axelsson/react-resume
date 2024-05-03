import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='nav-list'>
            <div className='nav-link-container'>
                <li className='nav-link'>
                    About
                </li>
                <div className='hover-line'></div>
            </div>
            
            <li className='nav-link'>
                Projects
            </li>
            <li className='nav-link'>
                Contact
            </li>
        </ul>
    </nav>
  )
}

export default Navbar