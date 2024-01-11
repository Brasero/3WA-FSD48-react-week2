import {useSelector, useDispatch} from "react-redux";
import {selectLog} from "../../store/selector/logSelector.js";
import {resetLogAction} from "../../store/action/logAction.js";


const logContainer = {
    display: "flex",
    flexDirection: "column",
    maxHeight: '30vh',
    overflowX: 'auto',
    overflowY: 'hidden'
}
function Log() {

    const dispatch = useDispatch()
    const logs = useSelector(selectLog)

    const handleReset = () => {
        dispatch(resetLogAction())
    }

    return (
        <div>
            <div>
                {
                    logs.length > 0 ? (
                        <div style={logContainer}>
                            {
                                logs.map((log, index) => {
                                    return <div>{log.action}, {(new Date(log.date)).toLocaleDateString()}</div>
                                })
                            }
                        </div>
                    ) : (
                        <span>Aucun Log</span>
                    )
                }
            </div>
            <button onClick={handleReset}>RESET</button>
        </div>
    )
}

export default Log;