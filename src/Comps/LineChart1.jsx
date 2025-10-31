import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TaskContext } from "../Context/TaskContext";
import "./Comps.css"
function LineChart1() {
  const{focus}=useContext(TaskContext)
  
 
  return (
    <div className="graph">
 

     
      <ResponsiveContainer className='graph1'>
        <LineChart data={focus}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="id" />
          <YAxis label={{ value: "Minutes", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="time"
            stroke="rgb(197, 61, 84)"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
       </div>
    
  );
}

export default LineChart1;
