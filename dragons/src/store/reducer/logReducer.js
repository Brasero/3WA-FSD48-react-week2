import {ADD_LOG, RESET_LOG} from "../action/logAction.js";

const initialState = {
    logs: []
}

const logReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_LOG:
            return {
                ...state,
                logs: state.logs.concat(action.payload)
            }

        case RESET_LOG:
            return {
                ...state,
                logs: []
            }
        default:
            return state
    }
}

export default logReducer