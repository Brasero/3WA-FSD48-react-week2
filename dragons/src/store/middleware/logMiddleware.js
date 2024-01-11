import {ADD_KNIGHT, DELETE_KNIGHT} from "../action/knightAction.js";
import {ADD_DRAGON, DELETE_DRAGON} from "../action/dragonAction.js";
import {addLogAction} from "../action/logAction.js";

const logMiddleware = store => next => action => {
    if ([ADD_KNIGHT, ADD_DRAGON, DELETE_KNIGHT, DELETE_DRAGON].includes(action.type)) {
        store.dispatch(addLogAction({action: action.type, date: Date.now()}))
    }
    next(action)
}

export default logMiddleware