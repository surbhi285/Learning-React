import { createStore } from "redux";
import toggleReducer from "../reducer/reducer";



function basicReduxstore(){

    return createStore(toggleReducer)
}

// CombineReducer -> to add more reducer function


export default basicReduxstore;