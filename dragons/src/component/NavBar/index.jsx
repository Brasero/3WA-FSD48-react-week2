import {NavLink} from "react-router-dom";
import './nav.css';


function NavBar() {

    return (
        <nav>
            <NavLink to={'/'} >HOME</NavLink>
            <NavLink to={'/couple'}>COUPLE</NavLink>
        </nav>
    )
}

export default NavBar