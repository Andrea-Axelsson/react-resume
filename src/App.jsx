import About from "./pages/About"
import './App.css'
import Navbar from "./components/Navbar"
import ToogleMode from "./components/ToogleMode"

function App() {
  
  return (
    <>
    <section className="background">
      <Navbar/>
      <About/>
      <ToogleMode/>
    </section>
      
    </>
  )
}

export default App
