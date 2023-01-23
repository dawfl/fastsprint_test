
import BacklogContainer from '../../components/BacklogContainer/backlogcontainer'
import SideBar from '../../components/sidebar/sidebar'
import './sprintpage.scss'

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const SprintPage = () => {

    const [sprint, setSprint] = useState([])
    const [sprintPreactive, setsprintPreactive] = useState([])
    const [taskInputs, settaskInputs] = useState("")
    const [tasksData, setTaskData] = useState([])

    useEffect(()=>{
        const getDataSprint = async () => {
           await axios.get('http://127.0.0.1:8000/api/sprints').then(function(response){
            setSprint(response.data)
           }).catch(err=>{
            console.log(err.message)
           })
        }
        getDataSprint()

    }, []);
    
    useEffect(()=>{
        const getDataPreActivate = () => {
            try {
                axios.get('http://127.0.0.1:8000/api/sprintpreactivate')
                .then(element => 
                    setsprintPreactive(element.data)
                )
            } catch(error) {

                this.setsprintPreactive(console.log("error"))
            }
        }
        getDataPreActivate()

    }, []);

    useEffect(()=>{
        const getDataTasks = async () => {
            await axios.get('http://127.0.0.1:8000/api/tasks').then(element => 
            setTaskData(element.data)).catch(error=>console.log(error))
        }
        getDataTasks()

    }, []);

    const handleInput = (e) => {
        const id = e.target.id
        const value = e.target.value
        settaskInputs({...taskInputs, [id]:value})
    }


    const addTask = async () => {
        await axios.post('http://127.0.0.1:8000/api/tasks', taskInputs)
    }


    const activateSprint = () => {
        axios.post('http://127.0.0.1:8000/api/sprintpreactivate', {
            id: sprintPreactive._id,
            activate: false,
            preactivate:true
         } )
    }
    return(
    <>
        <div className="mainDashboardContainer">
            <SideBar/>
            <BacklogContainer  
                sprintPreactive={sprintPreactive}
                sprint={sprint}
                handleInput={handleInput}
                addTask={addTask}
                tasksData={tasksData}
                activateSprint={activateSprint}
                />
        </div>
    </>      
    )
}


export default SprintPage


