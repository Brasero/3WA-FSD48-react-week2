import {Routes, Route} from 'react-router-dom';
import Home from "./page/Home.jsx";
import Client from "./page/Client.jsx";
import NavBar from "./component/NavBar.jsx";
import {useReducer} from "react";
import clientReducer, {initialState} from "./reducer/clientReducer.js";
import AddClient from "./page/AddClient.jsx";


function App() {

    const [state, dispatch] = useReducer(clientReducer, initialState);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/client'} element={<Client clients={state.clients} />} />
        <Route path={'/add'} element={<AddClient client={state.client} dispatch={dispatch} />} />

        <Route path={'*'} element={
            <main>
                <p>Page introuvable</p>
            </main>
        } />
      </Routes>
    </>
  )
}

export default App