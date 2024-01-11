import {useDispatch, useSelector} from "react-redux";
import {selectKnight, selectKnightMessage} from "../../store/selector/knightSelector.js";
import {addKnightAction, setKnightAction} from "../../store/action/knightAction.js";

function KnightForm() {

    const dispatch = useDispatch()
    const knight = useSelector(selectKnight)
    const message = useSelector(selectKnightMessage)

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(setKnightAction({name, value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addKnightAction())
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Ajouter un chevalier</h3>
            <input onChange={handleChange} type={"text"} name={"name"} value={knight.name} placeholder={'Nom du chevalier'} />
            <input onChange={handleChange} type={"number"} name={"age"} value={knight.age} placeholder={'Age du chevalier'} />
            <input type={'submit'} value={'Ajouter'} />
            {
                message !== '' && <span style={{color: "red"}}>{message}</span>
            }
        </form>
    )
}

export default KnightForm;