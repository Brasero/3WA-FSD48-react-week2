import PageWrapper from "../component/PageWrapper.jsx";

function Client({clients = []}) {

    return (
        <PageWrapper>
            <h1>Clients</h1>
            {
                clients.length > 0 && (
                    <ul>
                        {
                            clients.map((client, index) => {
                                return <li key={index}>{client.name}</li>
                            })
                        }
                    </ul>
                )
            }
        </PageWrapper>
    )
}

export default Client;