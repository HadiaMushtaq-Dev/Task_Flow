import React, { useContext, useState } from 'react'
import { TaskContext } from '../Context/TaskContext'
import "./Comps.css"
function FilterBar() {
  const{findtask,setTaskarr}=useContext(TaskContext)
  
  function sort(value){
     const arr=findtask.filter((f)=>f.status===value)
     setTaskarr(arr)
  }
  function sort1(value){
    if(value==='asc'){

      const sortedTasks = [...findtask].sort((a, b) => new Date(a.date) - new Date(b.date));
      setTaskarr(sortedTasks)
    }
    else if(value==='desc'){
      
      const sortedTasks = [...findtask].sort((a, b) => new Date(b.date) - new Date(a.date));
      setTaskarr(sortedTasks)
    }

  }
  return (
    <div className='filter'>
        <select onChange={(e)=>sort(e.target.value)}>
          <option value=''>Select Filter Options</option>
          <option value='completed' >Show Completed Tasks</option>
          <option value='pending' >Show Pending Tasks</option>
        </select>
         <select onChange={(e)=>sort1(e.target.value)}>
          <option value=''>Select Sorting options</option>
          <option value='asc'>Oldest to Newest</option>
          <option value='desc'>Newest to Oldest</option>
        </select>
    </div>
  )
}

export default FilterBar
