const RmTask = ({jobs, setJobs}) => {
    
    const killTask = (id) => {
        const newChores = jobs.filter((job) => job.id !== id)
        setJobs(newChores)
    }

    return (
        <>
        {jobs.map((job) => {
            return (
            <div key={job.id}>
            <button key={job.id} id={job.id} onClick={() => killTask(job.id)}>finish</button>
            <p key={job.task}>{job.task}</p>
            </div>
            )
        })}
        </>
    )
}

export default RmTask;