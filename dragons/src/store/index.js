import {createStore, combineReducers} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import coupleReducer from "./reducer/coupleReducer.js";


const store = createStore(combineReducers({
    dragon: dragonReducer,
    knight: knightReducer,
    couple: coupleReducer
}))

store.subscribe(() => console.log(store.getState()))

export default store;