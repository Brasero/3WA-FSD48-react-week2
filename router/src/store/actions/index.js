export const INCREMENT = 'INCREMENT';

export const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

export const SET_CLIENT = "SET_CLIENT";

export const setClientAction = (name, value) => {
    return {
        type: SET_CLIENT,
        payload: {
            name,
            value
        }
    }
}

export const ADD_CLIENT = 'ADD_CLIENT';

export const addClientAction = () => {
    return {
        type: ADD_CLIENT
    }
}

export const DELETE_CLIENT = 'DELETE_CLIENT';

export const deleteClientAction = (id) => {
    return {
        type: DELETE_CLIENT,
        payload: id
    }
}

export const REVERSE_CLIENT = 'REVERSE_CLIENT';

export const reverseClientAction = () => {
    return {
        type: REVERSE_CLIENT
    }
}

export const SET_FILTER = 'SET_FILTER';

export const setFilterAction = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter
    }
}