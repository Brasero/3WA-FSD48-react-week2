export const selectClient = (state) => state.client.client;

export const selectClients = (state) => state.client.clients;

export const selectCount = (state) => state.count.count;

export const selectGenderFilter = (state) => state.client.filter;

export const selectClientWithFilter = (state) => {
    const filter = state.client.filter;
    if(filter === '') {
        return state.client.clients;
    }
    const clients = state.client.clients.filter((client) => client.gender === filter)
    return clients;
}

export const selectClientWithParam = (filter) => {
    return (state) => {
        if(filter === '') {
            return state.client.clients;
        }
        const clients = state.client.clients.filter((client) => client.gender === filter)
        return clients;
    }
}