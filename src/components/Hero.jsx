import React from 'react'

export default function Hero(){
  return (
    <section className="hero container" aria-label="Hero">
      <div className="hero-left">
        <div className="hi">Hi, I'm Divi 👋</div>
        <div className="title">Java Fullstack Developer — building reliable backends & smooth UIs</div>
        <p className="lead">I build full-stack web apps using Java (Spring Boot), React and relational databases.</p>
        <div className="cta">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn" style={{marginLeft:12}} href="/resume.pdf" download>Download Resume</a>
        </div>
      </div>
      <div className="hero-right">
        <div style={{textAlign:'center'}}>
          <div className="avatar">D</div>
          <div className="small" style={{marginTop:8}}>Java • React • Spring Boot</div>
        </div>
      </div>
    </section>
  )
}
