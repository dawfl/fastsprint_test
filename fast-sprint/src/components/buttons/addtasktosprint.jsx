
import {Link} from 'react-router-dom'


import './addtasktosprint.scss'

const AddTaskToSprintButton = ({openNewTask}) => {
    return(
        <div>
        <Link to="/backlog"><button className='addTaskToSprint' onClick={openNewTask}>+</button></Link>
           
       </div>
            
    )
}


export default AddTaskToSprintButton


