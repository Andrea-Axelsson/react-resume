import React from 'react'
import Form from '../components/Form'
import {buttonToggle} from '../features/toggleMode/toggleMode.js'
import { useSelector } from 'react-redux';
  

const Contact = () => {
  
  const button = useSelector(state => state.toggleMode.buttonToggle)

  return (
    <>
     <h1 className={ button ? "header dark" : "header"}>Contact me<span className="asterisk">*</span></h1>
    <Form/>
    
    </>
    
  )
}

export default Contact