import React from 'react'
import Form from '../components/Form'
import {buttonToggle} from '../features/toggleMode/toggleMode.js'
import { useSelector } from 'react-redux';
  

const Contact = () => {
  
  const button = useSelector(state => state.toggleMode.buttonToggle)

  return (
    <>
     {/* Dynamisk klassnamnstilldelning baserat på om 'button' tillståndet är sant eller falskt, ändrar stilen för dark eller light mode. */}
     <h1 className={ button ? "header dark" : "header"}>Contact me<span className="asterisk">*</span></h1>
    <Form/>
    
    </>
    
  )
}

export default Contact