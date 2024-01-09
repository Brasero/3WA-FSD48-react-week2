import Select from "./component/Select.jsx";
import List from "./component/List.jsx";
import {useEffect, useState} from "react";

function App() {

    const [select, setSelect] = useState('0')
    const [list, setList] = useState([])
    const [isPair, setIsPair] = useState(false)


    const handlePairChange = () => {
        setIsPair(!isPair)
    }

    const generateMult = (num, isPair) => {
        let i = 1;
        let res = 0;
        const multiple = []
        while (res < 100 && num !== 0) {
            res = num * i
            if((res <= 100) && ((isPair && res%2 === 0) || !isPair)) {
                multiple.push(res)
            }
            i++
        }

        return multiple
    }

    const handleSelectChange = (e) => {
        const {value} = e.target
        setSelect(value)
    }

    useEffect(() => {
        const num = parseInt(select)
        const multiple = generateMult(num, isPair)
        setList(multiple)
    }, [isPair, select])

    return (
        <>
            <Select value={select} change={handleSelectChange} />
            <input type={'checkbox'} value={isPair} onChange={handlePairChange} />
            <List list={list}/>
        </>
    )
}

export default App