
const initialClient = {
    name: "",
    surname: "",
    gender: "Mr"
}

export const initialState = {
    client: initialClient,
    clients: []
}


const clientReducer = (state,action) => {

    switch (action.type) {
        case 'SET_CLIENT':
            return {
                ...state,
                client: {
                    ...state.client,
                    [action.payload.name]: action.payload.value
                }
            }

        case 'ADD_CLIENT':
            return {
                ...state,
                clients: state.clients.concat([state.client]),
                client: {...initialClient}
            }

        default:
            return state;
    }
}

export default clientReducer;