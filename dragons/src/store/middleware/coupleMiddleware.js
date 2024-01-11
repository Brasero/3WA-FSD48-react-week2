import {ADD_COUPLE, DELETE_COUPLE} from "../action/coupleAction.js";
import {deleteDragonAction, reAddDragonAction} from "../action/dragonAction.js";
import {deleteKnightAction, reAddKnightAction} from "../action/knightAction.js";

const coupleMiddleware = store => next => action => {
    if (action.type === DELETE_COUPLE) {
        store.dispatch(reAddDragonAction(action.payload.dragon))
        store.dispatch(reAddKnightAction(action.payload.knight))
        console.log("Le middleware s'est effectuée")
    }
    if(action.type === ADD_COUPLE) {
        store.dispatch(deleteDragonAction(action.payload.dragon))
        store.dispatch(deleteKnightAction(action.payload.knight))
    }
    next(action)
}

export default coupleMiddleware;

// La fonction ci-dessus et equivalente à celle qui suit, seul la notation change
// function middleware(store) {
//     return (next) => {
//         return (action) => {
//
//         }
//      }
// }