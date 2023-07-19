import { useState,useEffect } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'

function App() {
  const [tasks, setTask]=useState([])
 
  
  return (
    <main className='bg-zinc-700 h-screen p-4 '>

    <div className='container mx-auto p-10'>
    <TaskForm />
    <TaskList />
    </div>
    </main>
  )
}

export default App
