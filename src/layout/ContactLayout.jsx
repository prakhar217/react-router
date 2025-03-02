import React from 'react'
import { Outlet } from 'react-router-dom'
import Contact from '../pages/Contact'

const ContactLayout = () => {
  return (
    <>
    <Contact />
    <Outlet />
    </>
  )
}

export default ContactLayout