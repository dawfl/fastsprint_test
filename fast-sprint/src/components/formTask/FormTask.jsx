

import { Link } from 'react-router-dom'
import '../formDetails.scss'





const FormTask = ({sprint, handleInput, addTask}) => {

    return(
        
        <div className="form">
            
            <form>
                <label>Tytul Zadania</label>
                <input id="title_name" onChange={handleInput} type='text'></input>
                <label >Opis</label>
                <textarea id="description" onChange={handleInput} rows="30"  cols="20"></textarea>
                <label  >Sprint</label>
                <select onChange={handleInput} id="sprint" > 
                    {sprint && sprint.map(element=> (
                    <option  key={element._id} value={element._id}> {element.sprint_name}</option>
                    ))}
                
                </select>
                <button onClick={addTask}>Dodaj</button>
            </form>
        </div>
    )
}


export default FormTask