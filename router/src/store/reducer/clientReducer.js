import {ADD_CLIENT, SET_CLIENT} from "../actions/index.js";

let id = 0;


const initialClient = {
    name: "",
    surname: "",
    gender: "Mr"
}

const initialState = {
    client: initialClient,
    clients: []
}


const clientReducer = (state = initialState ,action) => {

    switch (action.type) {
        case SET_CLIENT:
            return {
                ...state,
                client: {
                    ...state.client,
                    [action.payload.name]: action.payload.value
                }
            }

        case ADD_CLIENT:
            return {
                ...state,
                clients: state.clients.concat([{...state.client, id: id++}]),
                client: {...initialClient}
            }

        default:
            return state;
    }
}

export default clientReducer;