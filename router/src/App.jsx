import {Routes, Route} from 'react-router-dom';
import Home from "./page/Home.jsx";
import Client from "./page/Client.jsx";
import NavBar from "./component/NavBar.jsx";
import AddClient from "./page/AddClient.jsx";
import ClientDetail from "./page/ClientDetail.jsx";
import Dashboard from "./page/Dashboard.jsx";


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route exact={true} path={'/client'} element={<Client />} />
        <Route path={'/client/:id'} element={<ClientDetail />} />
        <Route path={'/add'} element={<AddClient />} />

        <Route path={"/dashboard"} element={ <Dashboard/> }>
            <Route path={'log'} element={<>LOG</>}/>
            <Route path={'stat'} element={<>stat</>}/>
        </Route>

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