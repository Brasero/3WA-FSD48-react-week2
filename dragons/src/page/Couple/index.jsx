import Knights from "../../component/Knights/index.jsx";
import Dragons from "../../component/Dragons/index.jsx";
import "./couple.css";
import {useSelector, useDispatch} from "react-redux";
import {getSelectedKnight} from "../../store/selector/knightSelector.js";
import {selectCoupleDragon, selectCoupleKnight} from "../../store/selector/coupleSelector.js";
import {getSelectedDragon} from "../../store/selector/dragonSelector.js";
import {addCoupleAction} from "../../store/action/coupleAction.js";
import {deleteKnightAction} from "../../store/action/knightAction.js";
import {deleteDragonAction} from "../../store/action/dragonAction.js";
import {useState} from "react";
import CoupleList from "../../component/CoupleList/index.jsx";

function Couple () {

    const selectedKnightName = useSelector(selectCoupleKnight)
    const selectedDragonName = useSelector(selectCoupleDragon)
    const selectedDragon = useSelector(getSelectedDragon(selectedDragonName))
    const selectedKnight = useSelector(getSelectedKnight(selectedKnightName))
    const dispatch = useDispatch()
    const [message, setMessage ] = useState('')
    const handleClick = () => {
        if(selectedKnightName === '' || selectedDragonName === '') {
            setMessage('Merci de sélectionner un dragon et un chevalier')
            return
        }
        dispatch(addCoupleAction({knight: selectedKnight, dragon: selectedDragon}))
        dispatch(deleteKnightAction(selectedKnight))
        dispatch(deleteDragonAction(selectedDragon))
    }

    return (
        <main>
            <Knights couple/>
            <Dragons couple/>
            <button onClick={handleClick}>Créer le couple</button>
            {
                message !== '' && <span style={{color: "red"}}>{message}</span>
            }
            <CoupleList />
        </main>
    )
}

export default Couple;