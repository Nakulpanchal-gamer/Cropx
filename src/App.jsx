import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserNavbar } from './components/layouts/UserNavbar'
// import "./assets/css/adminlte.css"
// import "./assets/css/adminlte.min.css"
import { Signup } from './components/layouts/Signup'
import { Login } from './components/layouts/Login'
import axios from 'axios'
// import { UserDashboard } from './components/user/UserDashboard'
// import './assets/js/adminlte'
// import './assets/js/adminlte.min'

function App() {

  axios.defaults.baseURL = "http://localhost:3000"
  
  return (

    <>
    
      <Routes>
        <Route path="/user" element = { <UserNavbar/> }></Route>
        {/* <Route path="/dashboard" element = {<UserDashboard/>}></Route>  */}
        <Route path="/login" element = { <Login/> }></Route>
        <Route path="/Signup" element = { <Signup/> }></Route>
      </Routes>
    </>
  )
}

export default App
