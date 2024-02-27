import React from 'react'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    
    <>
    <header>
        <Menu/>
    </header>
    <main>
    <Outlet/>
    </main>
    </>
  )
}

export default Layout