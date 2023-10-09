import { act } from "@testing-library/react";

const Default_State ={
user:"let see",
}

function gitHubReducer(state=Default_State, action){

    switch(action.type){
        case "SET_USER":
         return{...state, user:action.payload};

        default:
            return state;
    }

}
export default gitHubReducer;