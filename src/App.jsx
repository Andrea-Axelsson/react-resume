import About from "./pages/About"
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

import {buttonToggle} from './features/toggleMode/toggleMode.js'
import { useSelector, useDispatch } from 'react-redux';

function App() {

const button = useSelector(state => state.toggleMode.buttonToggle)
const dispatch = useDispatch()
  
  return (
    <BrowserRouter>
      <section className={button ? "main-background dark" : "main-background"}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<About/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
        
      </section>
    </BrowserRouter>
  )
}

export default App
