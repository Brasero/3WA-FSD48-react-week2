

function BaseNumber ({base, value, onChange}) {

    const handleChange = (e) => {
        const {value, name} = e.target
        onChange(value, name)
    }

    return (
        <div className={'inputGroup'}>
            <label>Base {base}</label>
            <input name={base} value={value} onChange={handleChange} />
        </div>
    )
}

export default BaseNumber;