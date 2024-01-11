import {useSelector} from "react-redux";
import {selectCouples} from "../../store/selector/coupleSelector.js";
import CoupleItem from "./CoupleItem/index.jsx";

function CoupleList() {

    const couple = useSelector(selectCouples)

    return (
        <div>
            <h3>Liste des couple</h3>
            {
                couple.length > 0 ? (
                    <ul>
                        {
                            couple.map((cou, index) => {
                                return <CoupleItem couple={cou} key={`couple-${index}`} />
                            })
                        }
                    </ul>
                ) : (
                    <span>Aucun couple de créée</span>
                )
            }
        </div>
    )
}
export default CoupleList;