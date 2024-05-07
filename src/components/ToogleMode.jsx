import React from 'react'
import '../styles/ToggleMode.css'
import {buttonToggle} from '../features/toggleMode/toggleMode.js'
import { useSelector, useDispatch } from 'react-redux'

const ToogleMode = () => {
const button = useSelector(state => state.toggleMode.buttonToggle)
const dispatch = useDispatch()

console.log("BUTTON TOGGLE", button)

  return (
    <section className='toggle-container'>
    <div onClick={() => dispatch(buttonToggle())} className={button ? 'toggle-body dark': 'toggle-body'}>
        <div className='toggle-ball'></div>
    </div>
    </section>
    
  )
}

export default ToogleMode