import {useDispatch, useSelector} from "react-redux";
import {selectCoupleAction} from "../../../store/action/coupleAction.js";
import {selectCoupleKnight} from "../../../store/selector/coupleSelector.js";

function KnightSelection({knight}) {

    const dispatch = useDispatch()

    const selectedKnight = useSelector(selectCoupleKnight)


    const handleSelect = (e) => {
        const {name, value} = e.target
        dispatch(selectCoupleAction({name, value}))
    }
    console.log(selectedKnight)

    return (
        <li>
            <span>{knight.name}, </span>
            <span>{knight.age}</span>
            <span>
                <input onChange={handleSelect} type={"radio"} checked={selectedKnight === knight.name} name={"knight"} value={knight.name} />
            </span>
        </li>
    )
}

export default KnightSelection