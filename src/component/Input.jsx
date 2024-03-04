import { useState } from "react";
import { toast } from "react-toastify";

import StyledButton from "../Style/StylingButton";
import StyledInput from "../Style/InputStyling";

const Input = ({ tasks, setTasks }) => {
    const [ work,setWork ] = useState("");
    const [isclick,setIsClick] = useState('true');

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
        <StyledInput
        id="input"
        placeholder="add task..."
        type="text"
        onChange={(e) => setWork(e.target.value)}
        value={work}
        >
        </StyledInput>
        <StyledButton
        isclick={isclick} 
        onMouseDown={() => setIsClick((prev) => (!prev))}
        onMouseUp={() => setIsClick((prev) => (!prev))}
        onMouseLeave={() => setIsClick(prev => prev ? prev : !prev)}
        onClick={upDateList}
        >
        add
        </StyledButton>
        </>
    )
}

export default Input;