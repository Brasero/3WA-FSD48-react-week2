import {useDispatch, useSelector} from "react-redux";
import {selectDragon, selectDragonMessage} from "../../store/selector/dragonSelector.js";
import {addDragonAction, setDragonAction} from "../../store/action/dragonAction.js";

function DragonForm() {

    const dispatch = useDispatch()
    const dragon = useSelector(selectDragon)
    const message = useSelector(selectDragonMessage)

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(setDragonAction({name, value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addDragonAction())
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Ajouter un Dragon</h3>
            <input
                type={"text"}
                name={'name'}
                value={dragon.name}
                placeholder={'Nom du dragon'}
                onChange={handleChange}
            />
            <input
                type={"number"}
                name={'age'}
                value={dragon.age}
                placeholder={'Age du dragon'}
                onChange={handleChange}
            />
            <input type={"submit"} value={'Ajouter'} />
            {
                message !== '' && <span style={{color: "red"}}>{message}</span>
            }
        </form>
    )
}

export default DragonForm;