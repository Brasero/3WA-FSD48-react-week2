import {useDispatch, useSelector} from "react-redux";
import {selectCoupleDragon} from "../../../store/selector/coupleSelector.js";
import {selectCoupleAction} from "../../../store/action/coupleAction.js";

function DragonSelect({dragon}) {

    const dispatch = useDispatch()
    const selectedDragon = useSelector(selectCoupleDragon)

    const handleSelect = (e) => {
        const {name, value} = e.target
        dispatch(selectCoupleAction({name,value}))
    }
    return (
        <li>
            <span>{dragon.name}, </span>
            <span>{dragon.age}</span>
            <span>
                <input onChange={handleSelect} type={"radio"} checked={selectedDragon === dragon.name} name={"dragon"}
                       value={dragon.name}/>
            </span>
        </li>
    )
}

export default DragonSelect