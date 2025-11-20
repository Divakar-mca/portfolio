import React from 'react'

const skills = [
  'Java', 'Spring Boot', 'Hibernate', 'REST APIs',
  'React', 'HTML', 'CSS', 'JavaScript',
  'MySQL', 'Git', 'Docker'
]

export default function Skills(){
  return (
    <section id="skills" className="section container">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((s)=> (
          <div className="skill" key={s}>{s}</div>
        ))}
      </div>
    </section>
  )
}
