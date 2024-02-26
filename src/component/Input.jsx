import { useState } from "react";
import { toast } from "react-toastify";

const Input = ({ tasks, setTasks}) => {
    const [ work,setWork ] = useState("");
    const upDateList = () => {

        if(work === "") {
            toast.error("Non task!", {
                autoClose: 2000,
                pauseOnHover: false,
                draggable: true,
                closeOnClick: true,
                hideProgressBar: true,
            })
        } else {
            const newJobs = [...tasks, {
                id: Date.now(), task: work
            }]
            setTasks(newJobs)
            setWork("")

            toast.success("Complete", {
                autoClose: 2000,
                pauseOnHover: false,
                draggable: true,
                closeOnClick: true,
                hideProgressBar: true,
            })
        }
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