import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const Todos = [
    { id:1, task: "Shopping"},
    { id:2, task: "Running"},
  ]
  const [tasks,setTasks] = useState(Todos);

  return(
  <TaskContext.Provider value={[tasks,setTasks]}>
    {children}
  </TaskContext.Provider>

  );
};

export const useTodos = () => useContext(TaskContext)