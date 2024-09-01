// import { useState } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>

        <Routes> 

          <Route path='/' element={<Login />}></Route>

          <Route path='/dashboard' element={<Home />}></Route>

          <Route path='/login' element={<Login/>}></Route>

          <Route path='/signup' element={<SignUp/>}></Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
