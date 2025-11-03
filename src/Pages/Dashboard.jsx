import React, { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext'
import TasksCard from '../Comps/TasksCard'
import SearchBar from '../Comps/SearchBar'
import FilterBar from '../Comps/FilterBar'
function Dashboard() {
  const{taskarr}=useContext(TaskContext)
  return (
    <div className='db'>
      <SearchBar/>
      <FilterBar/>
      {taskarr.length>0?
      
        <TasksCard tasks={taskarr}/>
      :<div className="db1">
        <p>No added tasks yet !</p>
        </div>}
    </div>
  )
}

export default Dashboard
