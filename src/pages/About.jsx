import React from 'react'
import '../styles/About.css'
import { motion } from 'framer-motion'
import {buttonToggle} from '../features/toggleMode/toggleMode.js'
import { useSelector } from 'react-redux'



const About = () => {
  
const button = useSelector(state => state.toggleMode.buttonToggle)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1.5 }
  }
};
  
  return (
    <motion.main
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className='background'
  >

        <section className="about-container">
            <h2 className={ button ? "about-header dark" : "about-header"}>Hello web cowboy!</h2>
            <h1 className={ button ? "big-name dark" : "big-name"}>I'm Andrea<span className="asterisk">*</span></h1>
            <p className={ button ? "body dark" : "body"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nobis modi dolore explicabo iste consequatur libero. Nobis earum suscipit porro repellendus dolore corporis distinctio illo maiores dolor ratione, asperiores dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa animi consequatur inventore reiciendis, numquam provident pariatur nihil, voluptate ipsam odit expedita. Magni consectetur animi cum. Quibusdam accusamus vitae culpa?</p>
            </section>
        
    </motion.main>
  )
}

export default About