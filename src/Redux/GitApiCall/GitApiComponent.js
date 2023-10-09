import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Fetch_User } from "./Action/action";


function GitApiComponent(){
    console.log("absbcdh github ");

    const userName = useSelector((store)=>{
        console.log(store, "store debug");
        return store.user;
    });

    const loadingState = useSelector((store)=>{
        return store.loading;
    });

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(Fetch_User())
    }, [])

    return( 
    <>
    {loadingState && <h1>Loading.........</h1>}
    {!loadingState && <div>Git Hub Component, {userName}</div>}
    
    </>)
}

export default GitApiComponent;