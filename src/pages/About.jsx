import React from 'react'
import '../styles/About.css'
import { motion } from 'framer-motion' // Importerar 'motion' komponenten från Framer Motion biblioteket för att lägga till animationer.
import {buttonToggle} from '../features/toggleMode/toggleMode.js'
import { useSelector } from 'react-redux'



const About = () => {
  
const button = useSelector(state => state.toggleMode.buttonToggle)

const containerVariants = {
  hidden: { opacity: 0 }, // Definierar starttillståndet för animationen, osynlig till att börja med.
  visible: { 
    opacity: 1, // Sluttillstånd för animationen, helt synlig.
    transition: { duration: 1.5 } // Definierar hur lång tid övergången från osynlig till synlig ska ta.
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
           {/* Dynamisk klassnamnstilldelning baserat på om 'button' tillståndet är sant eller falskt, ändrar stilen för dark eller light mode. */}
            <h2 className={ button ? "about-header dark" : "about-header"}>Hello web cowboy!</h2>
            <h1 className={ button ? "big-name dark" : "big-name"}>I'm Andrea<span className="asterisk">*</span></h1>
            <p className={ button ? "body dark" : "body"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nobis modi dolore explicabo iste consequatur libero. Nobis earum suscipit porro repellendus dolore corporis distinctio illo maiores dolor ratione, asperiores dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa animi consequatur inventore reiciendis, numquam provident pariatur nihil, voluptate ipsam odit expedita. Magni consectetur animi cum. Quibusdam accusamus vitae culpa?</p>
            </section>
        
    </motion.main>
  )
}

export default About