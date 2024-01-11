import {useDispatch} from "react-redux";
import {deleteCoupleAction} from "../../../store/action/coupleAction.js";
import {addKnightAction, reAddKnightAction} from "../../../store/action/knightAction.js";
import {reAddDragonAction} from "../../../store/action/dragonAction.js";

function CoupleItem({couple}) {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCoupleAction(couple))
        dispatch(reAddKnightAction(couple.knight))
        dispatch(reAddDragonAction(couple.dragon))
    }

    return (
        <li >{couple.knight.name} / {couple.dragon.name}
            <button onClick={handleDelete}>X</button>
        </li>
    )
}

export default CoupleItem;