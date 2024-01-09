

function Select({value, change}) {

    const array = Array(11).fill('')


    return (
        <select value={value} onChange={change}>
            {
                array.map((_, index) => {
                    return <option value={index} key={`option-${index}`}>{index}</option>
                })
            }
        </select>
    )
}

export default Select;