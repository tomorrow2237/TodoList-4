const RmTask = ({jobs, setJobs}) => {
    const killTask = (id) => {
        const newChores = jobs.filter((job) => job.id !== id)
        setJobs(newChores)
    }
    
    return (
        <>
        {jobs.map((job) => {
            return (
            <>
            <button key={job.id} id={job.id} onClick={() => killTask(job.id)}>finish</button>
            <p key={job.task}>{job.task}</p>
            </>
            )
        })}
        </>
    )
}

export default RmTask;