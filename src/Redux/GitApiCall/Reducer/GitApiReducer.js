import ACTION_TYPE from "../ActionType/ACTION_TYPES";


const Default_State ={
    user:"",
    loading:false
    }
    
    function gitApiReducer(state=Default_State, action){
    
        switch(action.type){
            case ACTION_TYPE.Set_User:
             return{...state, user:action.payload};

             case ACTION_TYPE.LOADING:
                return{...state, loading:action.payload};
    
            default:
                return state;
        }
    
    }
    export default gitApiReducer;