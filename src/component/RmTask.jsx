const RmTask = ({tasks, setTasks}) => {
    
    const killTask = (id) => {
        const newChores = tasks.filter((task) => task.id !== id)
        setTasks(newChores)
    }

    return (
        <>
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