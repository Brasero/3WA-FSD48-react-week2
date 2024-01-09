import PageWrapper from "../component/PageWrapper.jsx";
import {NavLink, Outlet} from "react-router-dom";

function Dashboard() {

    return (
        <PageWrapper>
            <h1>Dashboard</h1>
            <div>
                <NavLink to={'log'}>Log</NavLink>
                <NavLink to={'stat'}>Stats</NavLink>
            </div>
            <Outlet />
            {
                // Outlet permet de préciser le placement des components des différents sous routes
            }
        </PageWrapper>
    )
}

export default Dashboard;