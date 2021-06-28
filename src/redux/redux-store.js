import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";

let reducers = combineReducers({
    messagePage: messageReducer,
})

let store = createStore(reducers);

export default store;
