import Row from "../Row/index.jsx";
import './pavage.scss';

function Pavage({col, row}) {

    return (
        <div className={'pavage'}>
            {
                (col != 0 && row != 0 )&& (
                    Array(row).fill('').map((_, index) => {
                        return <Row key={`row-${index}`} col={col} pos={index} />
                    })
                )
            }
        </div>
    )
}

export default Pavage;