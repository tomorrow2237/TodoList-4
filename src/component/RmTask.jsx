import { useState } from "react"
import React from "react"

import StyledList from "../Style/StylingList"

import { StyledTaskItem,StyledIcon, StyledTaskText } from "../Style/StylingList"
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const RmTask = ({tasks, setTasks}) => {
    
    const killTask = (id) => {
        const newChores = tasks.filter((task) => task.id !== id)
        setTasks(newChores)
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