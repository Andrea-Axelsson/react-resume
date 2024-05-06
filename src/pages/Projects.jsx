import React, {useEffect, useState} from 'react'
import { fetchRepos } from '../api'
import '../styles/Project.css'


const Projects = () => {
const [repositories, setRepositories] = useState([])

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
    <h1 className='header'>My Projects<span className="asterisk">*</span></h1>
    <section className='container'>
      
      {repositories.slice(0,5).map(repo => (
        <article className='projects-container'>
        <a className='repo-link' href={repo.html_url} target="_blank">{repo.name}</a>
        <p className='repo-desc'>{repo.description}</p>
        </article>
        
      ))}
      
    </section>
    
    </>
    
  )
}

export default Projects