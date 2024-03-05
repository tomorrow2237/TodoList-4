import React from "react"

import StyledList from "../style/StylingList"

import { StyledTaskItem,StyledIcon, StyledTaskText } from "../style/StylingList"
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useTodos } from "../context/SetComtext";

const RmTask = () => {

    const [tasks,dispatchFn] = useTodos();
    
    const killTask = (id) => {
        // const newChores = tasks.filter((task) => task.id !== id)
        // setTasks(newChores)
        dispatchFn({type:"remove", payload:{id: id}})
    }

    return (
        <StyledList>
        {tasks.map((task) => {
            return (
            <StyledTaskItem key={task.id}>
            <StyledIcon icon={faSquareCheck} key={task.id} id={task.id} onClick={() => killTask(task.id)}></StyledIcon>
            <StyledTaskText key={task.task}>{task.task}</StyledTaskText>
            </StyledTaskItem>
            )
        })}
        </StyledList>
    )
}

export default RmTask;