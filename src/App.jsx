import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/home/Hero'
import Home from './components/home/Home'
import Login from './components/Login'
import Register from './components/Register'
import Secret from './components/home/Secret'


function App() {
  return (
    <>
    <Nav/>
     <Routes>
      <Route path='*' element={<h1>not found</h1>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/secret' element={<Secret/>}/>
     </Routes>
    </>
  )
}

export default App