import {useSelector} from "react-redux";
import {selectDragons} from "../../store/selector/dragonSelector.js";
import Dragon from "./Dragon/index.jsx";
import DragonSelect from "./DragonSelect/index.jsx";

function Dragons({couple = false}) {

    const dragons = useSelector(selectDragons)

    return (
        <div>
            <h3>Liste des Dragons</h3>
            {
                dragons.length > 0 ? (
                    <ul>
                        {
                            dragons.map((dragon, index) =>
                                couple ? <DragonSelect dragon={dragon} key={`dragon-${index}`}/>
                                    :
                                    <Dragon dragon={dragon} key={`dragon-${index}`} />
                            )
                        }
                    </ul>
                ) : (
                    <span>Aucun dragon à afficher</span>
                )
            }
        </div>
    )
}
export default Dragons