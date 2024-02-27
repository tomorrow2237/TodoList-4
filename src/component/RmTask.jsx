import { useState } from "react"
import React from "react"

import StyledButton from "./Styling"

const RmTask = ({tasks, setTasks}) => {
    
    const killTask = (id) => {
        const newChores = tasks.filter((task) => task.id !== id)
        setTasks(newChores)
    }
    const [isclick,setIsClick] = useState('false');

    return (
        <>
        <StyledButton
        isclick={isclick ? true : undefined} 
        onMouseDown={() => setIsClick((prev) => (!prev))}
        onMouseUp={() => setIsClick((prev) => (!prev))}
        onMouseLeave={() => setIsClick(prev => prev ? prev : !prev)}
        >add</StyledButton>
        {tasks.map((task) => {
            return (
            <div key={task.id}>
            <button key={task.id} id={task.id} onClick={() => killTask(task.id)}>finish</button>
            <p key={task.task}>{task.task}</p>
            </div>
            )
        })}
        </>
    )
}

export default RmTask;