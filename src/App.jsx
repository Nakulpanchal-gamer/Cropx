import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Index } from './Index'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { UserSidebar } from './components/layouts/UserSidebar'
import "./assets/css/adminlte.css"
import "./assets/css/adminlte.min.css"
import { Signup } from './components/layouts/Signup'
import { Login } from './components/layouts/Login'
function App() {

  return (

    <>
    {/* <Header></Header>
    <Routes>
      <Route path="/" element= {<Index/>}></Route>
      <Route path="/login2" element= {<Login2/>}></Route>
    </Routes>
    <Footer></Footer> */}
    <body className='layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded'>
      <div className='app-wrapper'>
        {/* <UserSidebar></UserSidebar> */}
      <Routes>
        <Route path="/user" element = { <UserSidebar/> }></Route>
        <Route path="/login" element = { <Login/> }></Route>
        <Route path="/Signup" element = { <Signup/> }></Route>
      </Routes>
      </div>
    </body>
    </>
  )
}

export default App
