import { useState } from "react"

function App() {

  const Todos = [
    { id:1, task: "Shopping"},
    { id:2, task: "Running"},
    { id:3, task: "Washing my car"}
  ]
  const [jobs, setJobs] = useState(Todos);

  return (
    <>
    <h1>Symplized Todo List</h1>
      {jobs.map((job) => {
        <h4>{job.task}</h4>
        })}
    </>
  )
}

export default App
