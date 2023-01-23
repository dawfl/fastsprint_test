
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import FormSprint from "../../components/formSprint/FormSprint"
import SideBar from "../../components/sidebar/sidebar"

import './newsprint.scss'
import '../NewTask/newTask.scss'


const NewSprint = () => {

    const [sprintInput, setSprintInputs] = useState("")
    const [sprintLastId, setSprintLastId] = useState("")
    const [error, setErrors] = useState("")

    const handleInputSprint = (e) => {
        const id = e.target.id 
        const value = e.target.value 
        const inputName = document.getElementById('sprint_name').value;
        
        if(inputName === "" ){
            setErrors("Tytuł nie może być pusty")
        } else if ( inputName != "" ){
            setErrors("")
            setSprintInputs({...sprintInput, [id]:value})
        }
    }

    const createSprint = () => {
        if(sprintInput.sprint_name === "" || sprintInput.sprint_name === null 
        || sprintInput.sprint_name === undefined ){
            setErrors("Tytuł nie może być pusty")
        } else if (sprintInput.sprint_name != undefined || error != "" 
        || sprintInput.sprint_name != "")  { 
            axios.post('http://127.0.0.1:8000/api/sprints', sprintInput)
            .then(response => 
                setSprintLastId(response.data._id)
            ).catch(err=>{
                console.log(err.message)
            })
        }
    }
    return(
        <div className="mainDashboardContainer">
                <SideBar/>
            <div className="newSprintContainer">
                    <FormSprint 
                        sprintInput={sprintInput} 
                        error={error} 
                        createSprint={()=>createSprint()} 
                        handleInputSprint={handleInputSprint} 
                        sprintLastId={sprintLastId}/>
         
            </div>
        </div>   
    )

}

export default NewSprint