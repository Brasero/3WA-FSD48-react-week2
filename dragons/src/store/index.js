import {createStore, combineReducers, applyMiddleware} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import coupleReducer from "./reducer/coupleReducer.js";
import coupleMiddleware from "./middleware/coupleMiddleware.js";
import logReducer from "./reducer/logReducer.js";
import logMiddleware from "./middleware/logMiddleware.js";


const store = createStore(combineReducers({
    dragon: dragonReducer,
    knight: knightReducer,
    couple: coupleReducer,
    log: logReducer
}), applyMiddleware(coupleMiddleware, logMiddleware))

store.subscribe(() => console.log(store.getState()))

export default store;