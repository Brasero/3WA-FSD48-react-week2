import PageWrapper from "../component/PageWrapper.jsx";
import {useParams, useNavigate} from "react-router-dom";

function ClientDetail({clients}) {

    const naviguate = useNavigate()

    const {id} = useParams()

    const client = clients.find((client) => client.id == id)

    const goBack = () => {
        naviguate(-1)
    }

    return (
        <PageWrapper>
            <button onClick={goBack}>{'<-'}</button>
            <div>
                <span>Nom :</span>
                {client.name}
            </div>
            <div>
                <span>Prénom :</span>
                {client.surname}
            </div>
            <div>
                <span>Genre :</span>
                {client.gender}
            </div>
        </PageWrapper>
    )
}

export default ClientDetail;