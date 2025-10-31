import React, { useContext } from 'react'
import "./Comps.css"
import { TaskContext } from '../Context/TaskContext'
function SearchBar() {
    const{findtask,setTaskarr}=useContext(TaskContext)
     function findval(val){
        const arr=findtask.filter((f)=>f.name.toLowerCase().includes(val.trim().toLowerCase()) || f.category.toLowerCase().includes(val.trim().toLowerCase()))
        setTaskarr(arr)
     }
  return (
    <div className='srch'>
      <input type="text" placeholder='Enter Task Tile or Category ...' onChange={(e)=>findval(e.target.value)}/>
      <button onClick={()=>setTaskarr(findtask)}>Clear Filter</button>
    </div>
  )
}

export default SearchBar
