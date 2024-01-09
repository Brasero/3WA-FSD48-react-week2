import BaseNumber from "./component/BaseNumber.jsx";
import {useReducer} from "react";

function App() {

    const initialState = {
        number: "",
        conversion: ''
    }

    const reducer = (state, action) => {
        switch(action.type) {

            case "SET_NUMBER":
                const { number, base } = action.payload
                const parsed = parseInt(number, base)

                if (number && base == 10) {
                    return {
                        ...state,
                        conversion: parsed.toString(2),
                        number
                    }
                }

                if (number && base == 2) {
                    return {
                        ...state,
                        conversion: number,
                        number: parsed.toString(10)
                    }
                }

                return {
                    ...state,
                    number: '',
                    conversion: ''
                }


            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const {number, conversion} = state;
    const handleChange = (number, base) => {
        dispatch({type: 'SET_NUMBER', payload: {number, base}});
    }

  return (
    <>
        <BaseNumber base={10} value={number} onChange={handleChange} />
        <BaseNumber base={2} value={conversion} onChange={handleChange} />
    </>
  )
}

export default App