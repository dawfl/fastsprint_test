



import './formSprint.scss'
import '../formDetails.scss'
import { Link } from 'react-router-dom'

const FormSprint = ({ createSprint , handleInputSprint , sprintLastId, error, sprintInput}) => {
 
console.log(sprintInput.sprint_name)

    return(
       
        <div className="formSprint">
            
            <form className="formdetailSprint">
                <label></label>
                <input onChange={handleInputSprint} id="sprint_name"  type='text' className="inputSprintTitle" placeholder='Tytuł'></input>
                <span>{error}</span>
                <label></label>
                <input onChange={handleInputSprint} id="sprint_aim" cols="20" className='inputSprintAim' placeholder='Cel Sprintu'></input>
                <label name={''}></label>
               
               
               <Link to={sprintInput.sprint_name === undefined 
                ||  sprintInput.sprint_name === "" || sprintInput.error === "" ?  "": "/newtask"
                
                
                }><button  onClick={ createSprint } className='bottomSprintAdd'>Dalej</button></Link> 
            </form>
        </div>
    )
}


export default FormSprint