import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './sidebar.scss'

const SideBar = () => {



    return(
        <div className='sideBarContainer' id="sideBarContainer">
            <div className='sideBarProfile'>
                <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png" ></img>
           
            </div>
            <div className="sprintLink">
                <Link style={{textDecoration:"none", color:"black"}} to="/newsprint"><div className="sprintText">Nowy Sprint</div></Link>
            </div>
            <div className="sprintLink">
                <Link style={{textDecoration:"none", color:"black"}} to="/backlog"><div className="sprintText">Backlog</div></Link>
            </div>
        </div>
    )
}


export default SideBar


