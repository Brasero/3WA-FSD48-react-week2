import {ADD_CLIENT, DELETE_CLIENT, REVERSE_CLIENT, SET_CLIENT, SET_FILTER} from "../actions/index.js";

let id = 0;


const initialClient = {
    name: "",
    surname: "",
    gender: "Mr"
}

const initialState = {
    client: initialClient,
    clients: [],
    filter: ''
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

        case DELETE_CLIENT:
            return {
                ...state,
                clients: state.clients.filter((client) => client.id !== action.payload)
            }

        case REVERSE_CLIENT:
            return {
                ...state,
                clients: [...state.clients.reverse()]
            }

        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state;
    }
}

export default clientReducer;