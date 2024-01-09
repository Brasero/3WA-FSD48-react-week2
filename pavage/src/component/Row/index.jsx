import Star from "../Star/index.jsx";


function Row({col, pos}) {

    return (
        <div className={'row'}>
            {
                col != 0 && (
                    Array(col).fill('').map((_, index) => {
                        return <Star key={`star-${col * pos + index}`} pos={col * pos + index} />
                    })
                )
            }
        </div>
    )
}

export default Row;