import { LOADING_ACTION } from "../../GithubUser/action/action";
import ACTION_TYPES from "../ActionType/ACTION_TYPES"

export const Set_User_Action=(payload)=> {
return{
    type:ACTION_TYPES.Set_User,
    payload: payload,
};
};

export const LOADING = (payload)=>{
    return{
      type:ACTION_TYPES.LOADING,
      payload: payload,
    };
};

export const Error = (payload)=>{
    return{
        type:ACTION_TYPES.ERROR,
        payload: payload,
    };
};

// if we call an api it will go to action creator but there thunk will handle api and return function instead of object
export const Fetch_User = (payload)=>{

    // so in fetch this object will not return it will return simple function
    // return{
    //     type:ACTION_TYPES.FETCH_USER,
    //     payload: payload,
    // }
  
    // here dispatch creating path from thunk to reducer and it can send action object also
    return async(dispatch, storeState)=>{

        // call an api
            // fetch("https://api.github.com/users/surbhi285")
            //   .then((response) => response.json())
            //   .then((result) => {
            //     console.log(result);
            //     console.log(result.login);
            //     dispatch (Set_User_Action(result.login));
            //   })
            //   .catch((error) => console.log("error", error));

         dispatch(LOADING(true));

    const response = await fetch("https://api.github.com/users/surbhi285");
    const data = await response.json();
    console.log(data, "data")
    dispatch(LOADING(false));
    const {login} = data
    dispatch (Set_User_Action(login));
          }

    };
