export const SELECT_COUPLE = 'SELECT_COUPLE'
export const selectCoupleAction = (payload) => {
    return {
        type: SELECT_COUPLE,
        payload
    }
}

export const ADD_COUPLE = 'ADD_COUPLE'

export const addCoupleAction = (payload) => {
    return {
        type: ADD_COUPLE,
        payload
    }
}

export const DELETE_COUPLE = "DELETE_COUPLE"

export const deleteCoupleAction = (payload) => {
    return {
        type: DELETE_COUPLE,
        payload
    }
}