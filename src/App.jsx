import { useState } from "react"
import Title from "./component/Title";

function App() {

  const Todos = [
    { id:1, task: "Shopping"},
    { id:2, task: "Running"},
    { id:3, task: "Washing my car"}
  ]
  const [jobs, setJobs] = useState(Todos);

  return (
    <>
    <Title />
    <div>
      {
        jobs.map((job) => {
          return(
            <div key={job.task}>
            <button>finish</button>
            <p>{job.task}</p>
            </div>
          )
          })
      }
    </div>
    </>
  )
}

export default App
