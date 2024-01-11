export const ADD_LOG = 'ADD_LOG';
export const RESET_LOG = "RESET_LOG";

export const addLogAction = (payload) => {
    return {
        type: ADD_LOG,
        payload
    }
}

export const resetLogAction = () => {
    return {
        type: RESET_LOG
    }
}