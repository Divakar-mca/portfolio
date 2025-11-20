import React from 'react'
import { projects } from '../data/projects'

export default function Projects(){
  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <article key={p.id} className="project">
            <h3>{p.title}</h3>
            <p className="small">{p.desc}</p>
            <div className="tags">
              {p.tech.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="links">
              <a className="btn" href={p.github} target="_blank" rel="noreferrer">View Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
