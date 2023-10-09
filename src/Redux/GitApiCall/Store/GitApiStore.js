import { applyMiddleware, createStore } from "redux";
import gitApiReducer from "../Reducer/GitApiReducer";
import thunk from "redux-thunk";


function gitApiStore(){
    return createStore(gitApiReducer, applyMiddleware(thunk));
}

export default gitApiStore;