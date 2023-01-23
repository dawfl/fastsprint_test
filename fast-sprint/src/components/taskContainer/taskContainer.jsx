

import './taskContainer.scss'

const TaskContainer = ({tasksData}) => {

    return(
       <>
       {tasksData && tasksData.map(tasks=>(
        
        <div key={tasks._id} className='TaskContainer'>
            <div className='titleTask'>
                <span >{tasks.title_name}</span>
            </div>
            <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png"></img>
        
                
        </div>
        ))}
        </>
            
    )
}


export default TaskContainer


