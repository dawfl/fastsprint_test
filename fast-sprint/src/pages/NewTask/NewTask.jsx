

import SideBar from "../../components/sidebar/sidebar"
import './newTask.scss'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const NewTask = () => {

    const [taskInputs, settaskInputs] = useState([])
    const [dataSprints, setSprint] = useState([])
    
    const handleInput = (e) => {
        const id = e.target.id
        const value = e.target.value
        settaskInputs({...taskInputs, [id]:value})
    }

    const createTask = () => {
        axios.post('http://127.0.0.1:8000/api/tasks', taskInputs)
        window.location.reload()
        }

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

    return(
        <div className="mainDashboardContainer">
                <SideBar/>
            <div className="newTaskContainer" id="newTaskContainer">
            <div className="form">
                <form>
                    <label></label>
                    <input type='text' id="title_name" className="inputTaskSprintNew"  placeholder='Tytuł' onChange={handleInput} ></input>
                    <label></label>
                    <textarea rows="10" id="description"  onChange={handleInput} cols="10" className="inputTaskSprintNew" placeholder='Opis Zadania' ></textarea>
                    <label></label>
                    <select onChange={handleInput} id="sprint" > 
                        {dataSprints && dataSprints.map(element=> (
                    <option  key={element._id} value={element._id}> {element.sprint_name}</option>
                    ))}
                
                </select>
                    <Link to="/newtask"><button onClick={createTask} className='bottomSprintAdd'>Dalej</button></Link>
                </form>
        </div>
         
            </div>
        </div>   
    )
}

export default NewTask