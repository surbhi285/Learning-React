import { createStore } from "redux";
import gitHubReducer from "../reducer/reducer";


function gitHubStore(){
    return createStore(gitHubReducer);
}
export default gitHubStore;