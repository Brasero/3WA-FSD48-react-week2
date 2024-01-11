import {configureStore} from "@reduxjs/toolkit";
import messageSlice from "./Slice/messageSlice.js";

const store = configureStore({
 reducer: {
  message: messageSlice
 },
 middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat([])
})

export default store;