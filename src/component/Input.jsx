import { useState } from "react";

const Input = ({ jobs, setJobs}) => {
    const [ work,setWork ] = useState("");
    const upDateList = () => {
        const newJobs = [...jobs, {
            id: Date.now(), task: work
        }]
        setJobs(newJobs)
        setWork("")
    }

    return(
        <>
        <input
        id="input"
        placeholder="add task..."
        type="text"
        onChange={(e) => setWork(e.target.value)}
        value={work}
        >
        </input>
        <button onClick={upDateList}>add</button>
        </>
    )
}

export default Input;