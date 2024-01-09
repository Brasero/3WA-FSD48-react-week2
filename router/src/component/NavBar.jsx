import {NavLink} from "react-router-dom";
import './nav.css';

function NavBar() {

    return (
        <nav>
            <NavLink to={'/'}
                className={({isActive}) => isActive && 'active'}
            >
                Home
            </NavLink>
            <NavLink to={'/client'}>Client</NavLink>
            <NavLink to={'/add'}>Ajouter</NavLink>
        </nav>
    )
}

export default NavBar;