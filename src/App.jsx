import { useState } from "react"
import Title from "./component/Title";
import Input from "./component/Input";
import RmTask from "./component/RmTask";

function App() {

  const Todos = [
    { id:1, task: "Shopping"},
    { id:2, task: "Running"},
    { id:3, task: "Washing my car"}
  ]
  const [jobs, setJobs] = useState(Todos);

  return (
    <>
    <Title/>
    <Input jobs={jobs} setJobs={setJobs}/>
    <br/>
    <RmTask jobs={jobs} setJobs={setJobs}/>
    </>
  )
}

export default App
