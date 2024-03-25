import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
    <>
        <MyNavbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout