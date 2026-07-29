import React from 'react'
import './About.css'

function About() {
  return (
   <div className='contacta'>
      <h1>Contact Us</h1>
      <form action="https://formspree.io/f/mwpypgqe" method='POST'>
        <input type="text" placeholder='Enter Your Name...' name='username' required />
        <input type="Email" placeholder='email' name='email' required />
        <textarea name="" placeholder='message' required></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default About
