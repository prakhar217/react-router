import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();

  
  return (
    <>
    <h1>Contact</h1>
    <div className='contact-buttons'>
        <button onClick={()=>{navigate('info')}} >Info</button>
        <button onClick={()=>{navigate('contactForm')}} >Form</button>
    </div>
    </>
    
  )
}

export default Contact