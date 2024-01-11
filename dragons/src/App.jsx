import './App.css'
import Home from "./page/Home/index.jsx";
import NavBar from "./component/NavBar/index.jsx";
import {Route, Routes} from "react-router-dom";
import Couple from "./page/Couple/index.jsx";

function App() {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path={'/'} element={ <Home/> } />
                <Route path={'/couple'} element={ <Couple /> } />
            </Routes>
        </>
    )
}

export default App