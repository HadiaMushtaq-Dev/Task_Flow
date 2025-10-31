import React, { useContext, useEffect, useState } from 'react'
import "./Pages.css"
import { TaskContext } from '../Context/TaskContext'
import { useLocation } from 'react-router-dom'
function Home() {
  const{setTaskarr,setFindtask}=useContext(TaskContext)
  const[name,setname]=useState('')
  const[date,setdate]=useState('')
  const[category,setcategory]=useState('Misc')
  const[display,setdisplay]=useState(false)
  const location=useLocation()
  const item=location.state
  useEffect(()=>{
    if(item){
      setname(item.name)
      setcategory(item.category)
      setdate(item.date)
    }
  },[item])
  function handleSubmit(e){
    e.preventDefault()
    const id=Date.now()
     setTaskarr((prev)=>[...prev,{id:id,name:name,date:date,category:category,status:"pending"}])
     setFindtask((prev)=>[...prev,{id:id,name:name,date:date,category:category,status:"pending"}])
    console.log(display)
    setdisplay(true)
    console.log(display)
  }
  
  return (
    <div className='home'>
      {display?
      <div className='alert'>
        <p className='cross' onClick={()=>setdisplay(false)}>X</p>
         <p>Task added successfully</p>
      </div>:<></>
      }
    <div className='home1'>
      <form onSubmit={handleSubmit}>
        <h1 >Enter task tile</h1>
        <input type='text' placeholder='Schedule A Get Togethor...' onChange={(e)=>setname(e.target.value)} value={name} required/>
        <h1 >Enter due date</h1>
        <input type='date' onChange={(e)=>setdate(e.target.value)} value={date} required />
        <h1>Select category</h1>
        <div className='cat'>
            <p className='items item1' onClick={()=>setcategory('study')}>Study</p>
            <p className='items item2' onClick={()=>setcategory('job')}>Job</p>
            <p className='items item3' onClick={()=>setcategory('family')}>Family</p>
            <p className='items item4' onClick={()=>setcategory('outdoor')}>Outdoor</p>
            <p className='items item5' onClick={()=>setcategory('hygiene')}>Hygiene</p>
            <p className='items item6' onClick={()=>setcategory('friends')}>Friends</p>
            <p className='items item7' onClick={()=>setcategory('travel')}>Travel</p>
            <p className='items item8' onClick={()=>setcategory('leisure')}>Leisure</p>
        </div>
        <button type='submit'>Add +</button>
      </form>
    </div>
    </div>
    
  )
}

export default Home
