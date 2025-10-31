import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import TaskProvider from './Context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
    <HashRouter>
      <App />
    </HashRouter>
    </TaskProvider>
  </React.StrictMode>
)
