import React, { useContext, useState } from 'react'
import "./Comps.css"
import { TaskContext } from '../Context/TaskContext'
import { useNavigate } from 'react-router-dom'
function TasksCard(props) {
  const navigate=useNavigate()
  const{findtask,setFindtask,setTaskarr}=useContext(TaskContext)
  const[complete,setComplete]=useState(false)
  function completed(id){
    const item=findtask.find((f)=>f.id===id)
    const items2={...item,status:"completed"}
    const arr=findtask.filter((f)=>f.id!==id)

    setFindtask([...arr,items2])
    setTaskarr([...arr,items2])
   
    
  }
  function deleteTask(id){
      const arr=findtask.filter((f)=>f.id!==id)

    setFindtask(arr)
    setTaskarr(arr)
  }
  function editTask(id){
         const item=findtask.find((f)=>f.id===id)
         navigate("/",{state:item})
         deleteTask(id)
  }
  return (
    <div className='grid'>
        
      {props.tasks.map((t)=>(
        <div key={t.id} className='item'>
            <div className='icons'>
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-icon-svg-download-png-9774353.png?f=webp&w=256" onClick={()=>deleteTask(t.id)} alt="X"/>
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-edit-icon-svg-download-png-2202989.png?f=webp&w=256" onClick={()=>editTask(t.id)} alt="🖋"/>
            </div>
            <h2>{t.name}</h2>
            <div className='fl'>
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/date-icon-svg-download-png-1585587.png?f=webp&w=256" alt="Due Date : "/>
            <p>{t.date}</p>
            </div>
            <div className='fl'>
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/category-icon-svg-download-png-1660150.png?f=webp&w=256" alt="Category : "/>
            <p>{t.category}</p>
            </div>
          {t.status==="pending"?
            <button onClick={()=>completed(t.id)}>Mark Completed</button>:
            <button>Completed</button>
          }
            
        </div>
      ))}
    </div>
  )
}

export default TasksCard
