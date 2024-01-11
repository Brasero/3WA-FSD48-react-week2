export const SET_KNIGHT = 'SET_KNIGHT';
export const setKnightAction = (payload) => {
    return {
        type: SET_KNIGHT,
        payload
    }
}

export const ADD_KNIGHT = 'ADD_KNIGHT';
export const addKnightAction = () => {
    return {
        type: ADD_KNIGHT
    }
}

export const DELETE_KNIGHT = 'DELETE_KNIGHT'

export const deleteKnightAction = (payload) => {
    return {
        type: DELETE_KNIGHT,
        payload
    }
}

export const RE_ADD_KNIGHT = 'RE_ADD_KNIGHT'

export const reAddKnightAction = (payload) => {
    return {
        type: RE_ADD_KNIGHT,
        payload
    }
}