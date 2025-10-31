import React, { useEffect, useRef, useState } from 'react'
import './Pages.css'
import { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext'
function Focus() {
  const[sec,setSec]=useState(0)
  const[min,setMin]=useState(0)
  const interval=useRef(0)
  const[clicked,setclicked]=useState(false)
  const{setFocus}=useContext(TaskContext)
  let c=0
  const totalMinutes = min + sec/60;
  function timer(){
 interval.current=setInterval(() => {
      setSec((prev)=>
        prev+1
      
        )
    
    }, 1000);
    setclicked(true)
  }
  function stopTimer(){
    clearInterval(interval.current)
    setclicked(false)
  }
  useEffect(()=>{
    if(sec>=10){
      setMin((prev)=>prev+1)
      setSec(0)
    }
  },[sec])
  function format(){
    if(sec<=9 && min<=9){
  
       return <h1>0{min}:0{sec}</h1>
     }
    if(sec<=9){
      return <h1>{min}:0{sec}</h1>
    }
     if(min<=9){
      return <h1>0{min}:{sec}</h1>
    }
    else{
       
      return <h1>{min}:{sec}</h1>
    
    }
    }
    function reset(){
      setSec(0)
      setMin(0)
      clearInterval(interval.current)
      interval.current = null;
  setclicked(false);
    }
  
  return (
    <div className='focus'>
      <div className='focus1'>
        <div className='timer'>
          
         <p className='add' onClick={()=>setFocus((prev)=>[...prev,{id:new Date().toISOString().split("T")[0],time:Number(totalMinutes.toFixed(2))}])}>+</p>
        {format()}
       {!clicked?
        <button onClick={()=>timer()}>Start</button>:<button onClick={()=>stopTimer()}>Stop</button>
       }
       <button onClick={()=>reset()}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Focus
