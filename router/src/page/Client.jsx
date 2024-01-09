import PageWrapper from "../component/PageWrapper.jsx";
import {NavLink} from "react-router-dom";

function Client({clients = []}) {

    return (
        <PageWrapper>
            <h1>Clients</h1>
            {
                clients.length > 0 && (
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {
                            clients.map((client, index) => {
                                return <NavLink to={`/client/${client.id}`} key={index}>{client.name}</NavLink>
                            })
                        }
                    </ul>
                )
            }
        </PageWrapper>
    )
}

export default Client;