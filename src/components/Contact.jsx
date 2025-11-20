import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({...form,[e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(()=>{
      setStatus('Thanks! I will reply to ' + form.email)
      setForm({name:'',email:'',message:''})
    },900)
  }

  return (
    <section id="contact" className="section container">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <input className="input" name="name" value={form.name} onChange={onChange} placeholder="Your name" />
        <input className="input" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" />
        <textarea className="input" name="message" value={form.message} onChange={onChange} rows={5} placeholder="Message" />
        <button className="btn btn-primary" type="submit">Send</button>
        <span>{status}</span>
      </form>
    </section>
  )
}
