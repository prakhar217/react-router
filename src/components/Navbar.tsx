import React from 'react'
import { NavLink, replace, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    //Replace true will not save the current path in the history and replace it with current path as only path in the history
  return (
    <>
    <ul>
       <NavLink to='/'><li>Home</li></NavLink> 
       <NavLink to='/product'><li>Product</li></NavLink>
       <NavLink to='/about'><li>About</li></NavLink>
       <NavLink to='/contacts'><li>Contacts</li></NavLink>
    </ul>
    <button onClick={()=>navigate('/about',{replace:true})} >Get Started</button>
    </>

  )
}

export default Navbar