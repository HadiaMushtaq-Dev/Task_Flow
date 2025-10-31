import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Comps.css"
function Nav() {
  const location=useLocation()
  const[activeTab,setactiveTab]=useState(location.pathname)
  useEffect(()=>{
    setactiveTab(location.pathname)
  },[location.pathname])
  return (
    <div className='nav'>
      <div className='nav1'>
        <div className='logo'>
      <h1>Track Flow</h1>

        </div>
      <nav>
        <Link to="/" className={activeTab==='/'?'link':'link1'}>Home</Link>
        <Link to="/Dashboard" className={activeTab==='/Dashboard'?'link':'link1'}>Add Tasks</Link>
        <Link to="/Focus" className={activeTab==='/Focus'?'link':'link1'}>Focus</Link>
        <Link to="/Analytics" className={activeTab==='/Analytics'?'link':'link1'}>Analytics</Link>
      </nav>
    </div>
    </div>
  )
}

export default Nav
