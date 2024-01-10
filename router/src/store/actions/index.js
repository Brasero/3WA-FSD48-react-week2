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