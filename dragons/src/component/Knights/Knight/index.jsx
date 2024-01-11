import {useDispatch} from "react-redux";
import {deleteKnightAction} from "../../../store/action/knightAction.js";

function Knight ({knight}) {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteKnightAction(knight))
    }

    return (
        <li>
            <span>{knight.name}, </span>
            <span>{knight.age}</span>
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

export default Knight;