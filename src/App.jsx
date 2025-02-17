import { useState } from 'react'
import './Login.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './NavBar'
import { Login2 } from './Login2'
import { Index } from './Index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><Navbar></Navbar>
    <Routes>
      <Route path="/" element= {<Index/>}></Route>
      <Route path="/login2" element= {<Login2/>}></Route>
    </Routes>
    </>
  )
}

export default App
