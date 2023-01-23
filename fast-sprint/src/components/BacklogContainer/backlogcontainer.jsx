

import AddTaskToSprintButton from '../buttons/addtasktosprint'
import TaskContainer from '../taskContainer/taskContainer'
import FormTask from '../formTask/FormTask'
import './backlogcontainer.scss'
import { useEffect } from 'react'
import axios  from 'axios'
import { useState } from 'react'
import TaskPreActivate from '../taskContainer/tasksPreActivate'



const BacklogContainer = ({sprintPreactive, sprint, handleInput, addTask, tasksData, activateSprint}) => {

    const openNewTask = () =>{
        document.getElementById('newTask').classList.add('newTaskActive')
        // getnewTask.style.transition = "all 2s";
        // getnewTask.style.display = 'block';
        document.getElementById('mainContainer').style.filter = "blur(3px)";
        document.getElementById('sideBarContainer').style.filter = "blur(3px)";
    }
    const changeStatusToPreActivate = async (id, statusPreactivate) => {
        if (!statusPreactivate){
            await axios.patch(`http://127.0.0.1:8000/api/sprint/${id}`, {
                preactivate: true
            })
            window.location.reload()
        } else if (statusPreactivate){
            await axios.patch(`http://127.0.0.1:8000/api/sprint/${id}`, {
                preactivate: false
            })
            window.location.reload()
        }
    }
    return(
        <>           
        <div className='mainContainer' id="mainContainer">
            <div className='sprintContainer'>
                {sprint.map(sprint=> (
                    <div className='sprintTitleContainer'>
                        <span className='sprintItems' id="sprintTitle">{sprint.sprint_name}</span>
                        <span className='sprintItems'>
                             <span>Task:</span>
                             <span>{sprint.tasks.length}</span></span>
                        <button onClick={()=>changeStatusToPreActivate(sprint._id, sprint.preactivate)} className='sprintItems'>{sprint.preactivate ? "pre-act" : "to-preact"}</button>
                    </div>
                ))}
            </div>
                <div className='backlogContainer'>
                    <div className='nextSprintContainer'>
                        <div className='sprintActive'>
                            <span className='sprintName'>Sprint: {sprintPreactive.sprint_name}</span>
                            <button className='activeSprintButton' onClick={activateSprint}>Aktywuj Sprint</button>
                        </div>
                        <AddTaskToSprintButton openNewTask={openNewTask}/>
                        <TaskPreActivate sprintPreactive={sprintPreactive} />
                    </div>
                <div className='nextSprintContainer'>
                    <span>Backlog</span>
                         <TaskContainer  tasksData={tasksData}/>
                </div>
            </div>
        </div>
        <div className="newTask" id="newTask">
            <FormTask  sprint={sprint} handleInput={handleInput} addTask={addTask}/>
        </div> 
    </>
    )
}
export default BacklogContainer

