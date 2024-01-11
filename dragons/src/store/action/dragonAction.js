export const SET_DRAGON = 'SET_DRAGON'

export const setDragonAction = (payload) => {
    return {
        type: SET_DRAGON,
        payload
    }
}

export const ADD_DRAGON = 'ADD_DRAGON';

export const addDragonAction = () => {
    return {
        type: ADD_DRAGON
    }
}

export const DELETE_DRAGON = 'DELETE_DRAGON'

export const deleteDragonAction = (payload) => {
    return {
        type: DELETE_DRAGON,
        payload
    }
}

export const RE_ADD_DRAGON = 'RE_ADD_DRAGON'
export const reAddDragonAction = (payload) => {
    return {
        type: RE_ADD_DRAGON,
        payload
    }
}