import PageWrapper from "../component/PageWrapper.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCount} from "../store/selector/index.js";
import {incrementAction} from "../store/actions/index.js";

function Home () {

    const dispatch = useDispatch()
    const count = useSelector(selectCount)


    const onClick = () => {
        dispatch({
            type: 'CLIENT/SET_CLIENT',
            payload: {
                name: 'name',
                value: 'coucou'
            }
        })
    }

    const increment = () => {
        dispatch(incrementAction())
    }

    return (
        <PageWrapper>
            <h1>Home</h1>
            <button onClick={onClick}>Redux Action</button>
            {count}
            <button onClick={increment}>+1</button>
        </PageWrapper>
    )
}

export default Home;