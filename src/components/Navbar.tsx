import React from 'react'
import { NavLink, replace, useNavigate } from 'react-router-dom'
import logo from '../assest/react-router-seeklogo.png'
const Navbar = () => {
    const navigate = useNavigate();
    //Replace true will not save the current path in the history and replace it with current path as only path in the history
  return (
    <>
    <div  className='navbar'>
    <img src={logo} alt="" />
    <ul>
       <NavLink to='/'><li>Home</li></NavLink> 
       <NavLink to='/product'><li>Product</li></NavLink>
       <NavLink to='/about'><li>About</li></NavLink>
       <NavLink to='/contacts'><li>Contacts</li></NavLink>
       <NavLink to='/jobs'><li>Jobs</li></NavLink>
    </ul>
    <button onClick={()=>navigate('/about',{replace:true})} >Get Started</button>
    </div>

    </>

  )
}

export default Navbar