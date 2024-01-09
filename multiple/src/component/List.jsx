

function List ({list}) {

    return (
        <>
            {
                list.length > 0 ? (
                    <ul>
                        {
                            list.map((val) => {
                                return <li key={`list-${val}`}>{val}</li>
                            })
                        }
                    </ul>
                ) : (
                    <span style={{color: "red"}}>Aucun multiple à afficher.</span>
                )
            }
        </>
    )
}

export default List