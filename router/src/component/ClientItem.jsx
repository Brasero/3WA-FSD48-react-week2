import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteClientAction} from "../store/actions/index.js";

function ClientItem({id, name}) {

    const dispatch = useDispatch()

    const buttonStyle = {
        background: 'red',
        color: 'white',

    }

    const onDelete = () => {
        dispatch(deleteClientAction(id))
    }

    return (
        <div style={{display: "flex"}}>
            <NavLink to={`/client/${id}`}>{name}</NavLink>
            <button onClick={onDelete} style={buttonStyle}>X</button>
        </div>
    )
}
export default ClientItem;