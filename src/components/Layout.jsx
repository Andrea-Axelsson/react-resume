import React from 'react'
import Navbar from './Navbar'
import ToogleMode from './ToogleMode'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    
    <Navbar/> {/* // Placerar Navbar-komponenten överst på varje sida. */}
    <main>
        <Outlet/> {/* // Outlet fungerar som en plats där de matchade barnrutterna kommer att renderas. */}
    </main>
    <ToogleMode/> {/* // ToogleMode-komponenten läggs till, oftast för att hantera temaväxling. */}

    
    </>
  )
}

export default Layout