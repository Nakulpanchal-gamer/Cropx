import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserSidebar } from './components/layouts/UserSidebar'
import "./assets/css/adminlte.css"
import "./assets/css/adminlte.min.css"
import { Signup1 } from './components/layouts/Signup1'
import { Login } from './components/layouts/Login'
// import "./assets/js/adminlte"
// import "./assets/js/adminlte.min"
import axios from 'axios'
function App() {

  axios.defaults.baseURL = "http://localhost:3000"
  
  return (

    <>
    {/* <Header></Header>
    <Routes>
      <Route path="/" element= {<Index/>}></Route>
      <Route path="/login2" element= {<Login2/>}></Route>
    </Routes>
    <Footer></Footer> */}
  
        {/* <UserSidebar></UserSidebar> */}
      <Routes>
        <Route path="/user" element = { <UserSidebar/> }></Route>
        <Route path="/login" element = { <Login/> }></Route>
        <Route path="/Signup" element = { <Signup1/> }></Route>
      </Routes>
    </>
  )
}

export default App
