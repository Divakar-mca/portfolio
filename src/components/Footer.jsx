import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div>Made with ❤️ • Divi</div>

      <div className="small" style={{display:"flex", gap:"12px", justifyContent:"center", marginTop:"6px"}}>
        <a href="https://github.com/Divakar-mca" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/motte-divakar/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:mottedivakar@gmail.com">Email</a>
      </div>
    </footer>
  )
}

