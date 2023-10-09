
import ActionType from "./actionType";


export const SET_USER_ACTION = (payload)=>{
    return{
        type: ActionType.SET_USER,
        payload: payload,
    };
};

export const LOADING_ACTION = (payload)=>{
    return{
        type:ActionType.LOADING_ACTION,
        payload:payload,
    };
};

export const ERROR_ACTION = (payload)=>{
    return{
        type:ActionType.ERROR,
        payload:payload,
    };
};



