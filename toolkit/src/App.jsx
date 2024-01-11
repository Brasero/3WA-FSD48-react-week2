import './App.css'
import {useSelector, useDispatch} from "react-redux";
import {selectMessage} from "./store/selector/messageSelector.js";
import {setMessage} from "./store/Slice/messageSlice.js";

function App() {

    const dispatch = useDispatch()
    const message = useSelector(selectMessage)

    const handleMessageChange = () => {
        message === '' ? dispatch(setMessage('coucou')) : dispatch(setMessage(''))
    }

  return (
    <>
        <div>{message}</div>
        <button onClick={handleMessageChange}>click me</button>
    </>
  )
}

export default App