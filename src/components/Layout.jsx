import React from 'react'
import Navbar from './Navbar'
import ToogleMode from './ToogleMode'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <ToogleMode/>

    
    </>
  )
}

export default Layout