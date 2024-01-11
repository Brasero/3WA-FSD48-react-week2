import {configureStore} from "@reduxjs/toolkit";
import taskSlice from "./Slice/taskSlice.js";
import proposalSlice from "./Slice/proposalSlice.js";

const store = configureStore({
    reducer: {
        task: taskSlice,
        proposal: proposalSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
})

export default store;