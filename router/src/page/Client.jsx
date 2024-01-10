import PageWrapper from "../component/PageWrapper.jsx";
import {useSelector, useDispatch} from "react-redux";
import {
    selectClients,
    selectClientWithFilter,
    selectClientWithParam,
    selectGenderFilter
} from "../store/selector/index.js";
import ClientItem from "../component/ClientItem.jsx";
import {reverseClientAction, setFilterAction} from "../store/actions/index.js";
import {genderType} from "../constant/gender.js";

function Client() {

    const filter = useSelector(selectGenderFilter)
    const clients = useSelector(selectClientWithParam(filter))
    const dispatch = useDispatch()

    const onReverse = () => {
        dispatch(reverseClientAction())
    }

    const onFilterChange = (e) => {
        const {value} = e.target
        dispatch(setFilterAction(value))
    }

    return (
        <PageWrapper>
            <h1>Clients</h1>
            <button onClick={onReverse}>Invérser la liste</button>
            <select value={filter} onChange={onFilterChange}>
                <option value={''}>Aucun</option>
                {
                    genderType.map(gender => {
                        return <option key={`gender-${gender.value}`} value={gender.value}>{gender.label}</option>
                    })
                }
            </select>
            {
                clients.length > 0 && (
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {
                            clients.map((client, index) => {
                                return <ClientItem key={`client-${client.id}`} id={client.id} name={client.name} />
                            })
                        }
                    </ul>
                )
            }
        </PageWrapper>
    )
}

export default Client;