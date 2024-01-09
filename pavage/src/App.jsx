import {useReducer, useState} from "react";
import Pavage from "./component/Pavage/index.jsx";

function App() {

    const initialState = {
        col: 0,
        row: 0
    }

    const reducer = (state, action) => {
        switch(action.type) {

            case 'SET':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }

            case 'RESET':
                return {
                    ...state,
                    col: 0,
                    row: 0
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [displayState, setDisplayState] = useState({
        row: 0,
        col: 0
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch({
            type: 'SET',
            payload: {
                name,
                value: parseInt(value)
            }
        })
    }

    const handleGenerate = () => {
        if (state.row == 0) {
            setDisplayState({
                row: 0,
                col: 0
            });
            return
        }

        setDisplayState({
            row: state.row,
            col: state.col || 10
        })
        dispatch({type: 'RESET'})
    }

  return (
    <>
        <div>
            <label>Ligne
                <input type={"number"} name={"row"} value={state.row} onChange={handleChange} />
            </label>
            <br/>
            <label>Colonne
                <input type={"number"} name={'col'} value={state.col} onChange={handleChange} />
            </label>
            <button onClick={handleGenerate}>Générer</button>
            <Pavage row={displayState.row} col={displayState.col} />
        </div>
    </>
  )
}

export default App