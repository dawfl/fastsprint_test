import './taskContainer.scss'

const TaskPreActivate = ({sprintPreactive}) => {
    console.log(sprintPreactive)
    return(
       <>

        {sprintPreactive.tasks && sprintPreactive.tasks.map((tasks)=>(
            <div key={tasks._id} className='TaskContainer'>
                <div className='titleTask'>
                    <span >{tasks.title_name}</span>
                </div>
                <div>{sprintPreactive.sprint}</div>
                <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png"></img>
            </div>
     
    
        ))}
            </>
            
    )
}


export default TaskPreActivate