import React, { useContext } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Comps.css"
import { TaskContext } from '../Context/TaskContext';
function Pie1() {
  const{findtask}=useContext(TaskContext)
  const arr1=findtask.filter((t)=>t.status==="pending")
  const arr2=findtask.filter((t)=>t.status==="completed")
    const data = [
  { name: 'total', value: findtask.length },
  { name: 'pending', value: arr1.length },
  { name: 'completed', value: arr2.length },
  
];
const COLORS = ['#60A5FA', '#34D399', '#FBBF24'];
  return (
    <div className='graph'>
       
       <ResponsiveContainer className='graph1'>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} 
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ backgroundColor: '#F9FAFB', borderRadius: '8px' }} 
          itemStyle={{ color: '#111827', fontSize: '14px' }} 
        />
        <Legend 
          wrapperStyle={{ fontSize: '14px', color: '#374151', fontWeight: 'bold' }} 
        />
      </PieChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Pie1
