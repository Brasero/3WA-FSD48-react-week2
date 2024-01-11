import {useSelector} from "react-redux";
import {selectKnights} from "../../store/selector/knightSelector.js";
import Knight from "./Knight/index.jsx";
import KnightSelection from "./KnightSelection/index.jsx";

function Knights({couple = false}) {

    const knights = useSelector(selectKnights)

    return (
        <div>
            <h3>Liste des Chevaliers</h3>
            {
                knights.length > 0 ? (
                    <ul>
                        {
                            knights.map((knight, index) => {
                                return couple ?
                                    <KnightSelection knight={knight} key={`knight-${index}`} />
                                    :
                                    <Knight knight={knight} key={`knight-${index}`} />
                            })
                        }
                    </ul>
                ) : (
                    <span>Aucun chevalier à afficher</span>
                )
            }
        </div>
    )
}

export default Knights;