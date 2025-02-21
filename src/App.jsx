import { useState } from 'react'
// import './Login.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './NavBar'
import { Login2 } from './Login2'
import { Index } from './Index'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { UserSidebar } from './components/layouts/UserSidebar'
import "./assets/css/adminlte.css"
import "./assets/css/adminlte.min.css"
import { Signup2 } from './components/layouts/Signup2'
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
        <Route path="/login" element = { <h1>LOGIN COMPONENT</h1> }></Route>
        <Route path="/Signup" element = { <Signup2/> }></Route>
      </Routes>
      </div>
    </body>
    </>
  )
}

export default App
