import { useState } from "react"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Title from "./component/Title";
import Input from "./component/Input";
import RmTask from "./component/RmTask";

function App() {

  const Todos = [
    { id:1, task: "Shopping"},
    { id:2, task: "Running"},
  ]
  const [tasks, setTasks] = useState(Todos);

  return (
    <>
    <ToastContainer 
    pauseOnHover: false
    />
    <Title/>
    <Input tasks={tasks} setTasks={setTasks}/>
    <RmTask tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
