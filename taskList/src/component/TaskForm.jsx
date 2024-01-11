import {useSelector, useDispatch} from "react-redux";
import {selectTask, selectTaskMessage} from "../store/selector/taskSelector.js";
import {addTask, changeTask} from "../store/Slice/taskSlice.js";
import {useState} from "react";
import {fetchTown} from "../store/Slice/proposalSlice.js";

function TaskForm() {

    const [town, setTown] = useState('')

    const dispatch = useDispatch()
    const task = useSelector(selectTask)
    const message = useSelector(selectTaskMessage)

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(changeTask({name, value}))
    }

    const handleTownChange = (e) => {
        const {value} = e.target
        setTown(value)
        if(town.length > 2) {
            dispatch(fetchTown(town))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask())
    }

    return (
        <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {
                message !== '' && <span style={{color: "red"}}>{message}</span>
            }
            <input onChange={handleChange} type={"text"} name={"title"} value={task.title} />
            <textarea onChange={handleChange} type={'text'} name={"description"} value={task.description} />
            <input name={'town'} value={town} onChange={handleTownChange} type={'text'} />
            <input type={'submit'} value={'Ajouter'} />
        </form>
    );
}

export default TaskForm;