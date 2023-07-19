import { useContext, useState } from "react";
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
const {createTask}= useContext(TaskContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto ">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-4">
       <h1 className="text-white mb-3 text-2xl font-bold text-center">Crea tu tarea </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-4  w-full mb-4 rounded-md "
          autoFocus
        />
        <textarea
          placeholder="Escriba la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-10 w-full mb-2 rounded-md  "
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white ">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
