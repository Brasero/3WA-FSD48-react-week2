import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTown = createAsyncThunk(
    'proposal/fetchTown',
    async (data) => {
        const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${data}&type=municipality`)
        return response.data
    }
)

const proposalSlice = createSlice({
    name: 'proposal',
    initialState: {
        proposals: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTown.fulfilled, (state, action) => {
            console.log(action.payload)
            state.proposals = action.payload.features.map((feature) => {
                return feature.properties.city
            })
        })
    }
})


export const {

} = proposalSlice.actions;

export default proposalSlice.reducer;