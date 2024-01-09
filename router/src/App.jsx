import {Routes, Route} from 'react-router-dom';
import Home from "./page/Home.jsx";
import Client from "./page/Client.jsx";
import NavBar from "./component/NavBar.jsx";


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/client'} element={<Client />} />
        <Route path={'/client/:id'} element={<Client />} />

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