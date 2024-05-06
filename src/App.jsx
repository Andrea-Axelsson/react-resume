import About from "./pages/About"
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

function App() {
  
  return (
    <BrowserRouter>
      <section className="main-background">
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
