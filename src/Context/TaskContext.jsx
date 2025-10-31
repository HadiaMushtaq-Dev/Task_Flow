import React, { createContext, useEffect, useState } from 'react'
export const TaskContext=createContext()
function TaskProvider({children}) {
    const[taskarr,setTaskarr]=useState(()=>{
        return JSON.parse(localStorage.getItem('taskarr')) || []
    })
    const[findtask,setFindtask]=useState(()=>{
        return JSON.parse(localStorage.getItem('findtask')) || []
    })
    const[focus,setFocus]=useState(()=>{
        return JSON.parse(localStorage.getItem('focus')) || []
    })
    useEffect(()=>{
        localStorage.setItem("taskarr",JSON.stringify(taskarr))
    },[taskarr])
     useEffect(()=>{
        localStorage.setItem("findtask",JSON.stringify(findtask))
    },[findtask])
      useEffect(()=>{
        localStorage.setItem("focus",JSON.stringify(focus))
    },[focus])
  return (
    <TaskContext.Provider value={{taskarr,setTaskarr,findtask,setFindtask,focus,setFocus}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
