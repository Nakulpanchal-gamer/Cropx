import React from 'react'
import { Outlet } from 'react-router-dom'
import { AgencyNavbar } from './AdminNavbar'

export const AgencySidebar = () => {
  return (
    <>
    
    
      <main class="app-main">
        <Outlet></Outlet>
      </main>
    </>
  )
}