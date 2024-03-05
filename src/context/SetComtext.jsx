import { createContext, useContext, useReducer } from "react";
export const TaskContext = createContext();

const reducerFn = (tasks, { type, payload }) => {
  switch(type) {
    case "update": {
    const updatedTasks = [...tasks,{ id: Date.now(), task: payload.task}]
    return updatedTasks;
    }
    
    case "remove" : {
      const newChores = tasks.filter((task) => task.id !== payload.id)
      return newChores;
    }

    default:
      throw new Error("Error unknown message");
  }
}
export const TaskProvider = ({children}) => {
  const Todos = [
    { id:1, task: "Shopping"},
    { id:2, task: "Running"},
  ]

  const [tasks,dispatchFn] = useReducer(reducerFn,Todos)

  return(
  <TaskContext.Provider value={[tasks,dispatchFn]}>
    {children}
  </TaskContext.Provider>

  );
};

export const useTodos = () => useContext(TaskContext)