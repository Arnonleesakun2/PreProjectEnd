import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <main className=''>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Layout
