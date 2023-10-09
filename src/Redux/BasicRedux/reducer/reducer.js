import Action_Type from "../actions/actionType/actionType";

 // so here defaultStore is bydefault state
export const DefaultStore = {
    toggle: false, 
    loading: false,

    counter: 0,
};

function toggleReducer(state = DefaultStore, action){
     
    console.log("hey there toggle reducer debug", state, action);

    switch(action.type){
        case Action_Type.Toggle:
            return{...state, toggle: !state.toggle}

            default: 
            return state;
    }
}

export default toggleReducer;