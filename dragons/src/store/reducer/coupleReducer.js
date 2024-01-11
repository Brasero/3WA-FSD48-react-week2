import {ADD_COUPLE, DELETE_COUPLE, SELECT_COUPLE} from "../action/coupleAction.js";

const initialState = {
    knight: '',
    dragon: '',
    couple: []
}

const coupleReducer = (state = initialState, action) => {
    let dragon, knight;
    switch(action.type) {
        case SELECT_COUPLE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case ADD_COUPLE:
            return {
                ...state,
                dragon: '',
                knight: '',
                couple: state.couple.concat(action.payload)
            }

        case DELETE_COUPLE:
            return {
                ...state,
                couple: state.couple.filter((c) => c !== action.payload)
            }


        default:
            return state;
    }
}

export default coupleReducer;