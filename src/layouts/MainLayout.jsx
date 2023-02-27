import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menubar from '../components/Menubar'

const MainLayout = () => {
  const { pathname } = useLocation()
  return (
    <div className='main-layout'>
        <Header/>
        <main className='mainLayout-main py-4'>
            <Outlet/>
        </main>
        <Footer/>
        <Menubar active={pathname} />
    </div>
  )
}

export default MainLayout
