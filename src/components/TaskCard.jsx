import { Button } from "@mui/material"
import { task } from "../data/task"
import {useContext} from 'react'
import { TaskContext } from "../context/TaskContext"

function TaskCard({task}) {
  const {deleteTask}=useContext(TaskContext);
  return (
    <div className="p-4 bg-gray-800 text-white rounded-md ">
    <h1 className="text-xs font-bold capitalize " >{task.title}</h1>
    <p className="text-gray-500 text-sn "> {task.descripcion}</p>
    <button className="bg-red-500 rounded-md py-1 mt-4  hover:bg-red-400" onClick={()=>deleteTask(task.id)}>Eliminar tarea</button>
    </div>
   
  )
}

export default TaskCard
