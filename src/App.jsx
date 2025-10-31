import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Comps/Nav'
import Home from './Pages/Home'
import Focus from './Pages/Focus'
import Dashboard from './Pages/Dashboard'
import Analytics from './Pages/Analytics'
import './App.css'
function App() {
  return (
    <div className='app'>
    
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Focus" element={<Focus />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Analytics" element={<Analytics />} />
        </Routes>
      </div>
    
    </div>
  )
}

export default App
