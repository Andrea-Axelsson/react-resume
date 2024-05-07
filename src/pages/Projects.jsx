import React, {useEffect, useState} from 'react'
import { fetchRepos } from '../api' // Importerar funktionen för att hämta GitHub-repositorier från en extern API-fil.
import '../styles/Project.css'
import {buttonToggle} from '../features/toggleMode/toggleMode.js'
import { useSelector } from 'react-redux';

  

const Projects = () => {
  const [repositories, setRepositories] = useState([]) // Använder useState för att lagra repositorier hämtade från GitHub.
  
  const button = useSelector(state => state.toggleMode.buttonToggle)

// Denna useEffect hook används för att utföra sidoeffekter i komponenten. Den innehåller en asynkron funktion 'getRepos' som hämtar data från ett API med funktionen 'fetchRepos', och lagrar sedan denna data i state-variabeln 'repositories'. Hook körs endast en gång vid första renderingen av komponenten eftersom beroendearrayen är tom ([]), vilket gör den idealisk för att hämta initial data.
useEffect(() => {
  async function getRepos(){
    const data = await fetchRepos()
    setRepositories(data)
  }
  getRepos()
}, [])

console.log("REPOS", repositories)
  return (
    <>
    <h1 className={ button ? "header dark" : "header"}>My Projects<span className="asterisk">*</span></h1>
    <section className='container'>
      
      {repositories.slice(0,5).map(repo => (
        <article className='projects-container'>
           {/* Dynamisk klassnamnstilldelning baserat på om 'button' tillståndet är sant eller falskt, ändrar stilen för dark eller light mode. */}
        <a className={ button ? "repo-link dark" : "repo-link"} href={repo.html_url} target="_blank">{repo.name}</a>
        <p className={ button ? "repo-desc dark" : "repo-desc"}>{repo.description}</p>
        </article>
        
      ))}
      
    </section>
    
    </>
    
  )
}

export default Projects