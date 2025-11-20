import React from 'react'
import { FaMoon } from 'react-icons/fa'

export default function Header(){
  const toggleTheme = () => {
    document.documentElement.classList.toggle('light')
  }

  return (
    <header className="container header">
      <div className="brand">Divakar • Fullstack</div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} style={{marginLeft:12,background:'transparent',border:'none',cursor:'pointer'}} aria-label="Toggle theme">
          <FaMoon />
        </button>
      </nav>
    </header>
  )
}
