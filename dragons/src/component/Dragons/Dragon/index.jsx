import {useDispatch} from "react-redux";
import {deleteDragonAction} from "../../../store/action/dragonAction.js";

function Dragon({dragon}) {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteDragonAction(dragon))
    }

    return (
        <li>
            <span>{dragon.name}, </span>
            <span>{dragon.age}</span>
            <span>
                <button style={{
                    background: 'red',
                    color: "white"
                }}
                    onClick={handleDelete}
                >
                    X
                </button>
            </span>
        </li>
    )
}

export default Dragon