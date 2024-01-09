import {NavLink} from "react-router-dom";
import './nav.css';

function NavBar() {

    return (
        <nav>
            <NavLink
                end
                to={'/'}
                className={({isActive}) => isActive && 'active'}
            >
                Home
            </NavLink>
            <NavLink end to={'/client'}>Client</NavLink>
            <NavLink end to={'/add'}>Ajouter</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </nav>
    )
}

export default NavBar;