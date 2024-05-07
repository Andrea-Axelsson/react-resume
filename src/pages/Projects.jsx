import React, {useEffect, useState} from 'react'
import { fetchRepos } from '../api'
import '../styles/Project.css'
import {buttonToggle} from '../features/toggleMode/toggleMode.js'
import { useSelector } from 'react-redux';

  

const Projects = () => {
  const [repositories, setRepositories] = useState([])
  
  const button = useSelector(state => state.toggleMode.buttonToggle)

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
        <a className={ button ? "repo-link dark" : "repo-link"} href={repo.html_url} target="_blank">{repo.name}</a>
        <p className={ button ? "repo-desc dark" : "repo-desc"}>{repo.description}</p>
        </article>
        
      ))}
      
    </section>
    
    </>
    
  )
}

export default Projects