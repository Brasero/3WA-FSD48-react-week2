import { useParams, useSearchParams } from "react-router-dom";

function Client() {

    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()


    console.log(searchParams)

    for(const [key, value] of searchParams) console.log(key, value)

    return (
        <>
            <h1>Clients  {id}</h1>
        </>
    )
}

export default Client;