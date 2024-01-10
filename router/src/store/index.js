import {createStore, combineReducers} from "redux";
import clientReducer from "./reducer/clientReducer.js";
import countReducer from "./reducer/countReducer.js";

const store = createStore(combineReducers({
    client: clientReducer,
    count: countReducer
}))

store.subscribe(() => console.log(store.getState()))

export default store;