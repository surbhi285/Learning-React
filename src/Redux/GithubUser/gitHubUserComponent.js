import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SET_USER_ACTION } from "./action/action";


function GitHubComponent(){
    console.log("absbcdh github ");

    const userName = useSelector((store)=>{
        console.log(store, "store debug");
        return store.user;
    });

    const dispatch = useDispatch();

    useEffect(() => {
            var myHeaders = new Headers();
            myHeaders.append("Accept", "application/vnd.github+json");
        
            var requestOptions = {
              method: "GET",
              headers: myHeaders,
              redirect: "follow",
            };
        
            fetch("https://api.github.com/users/surbhi285", requestOptions)
              .then((response) => response.json())
              .then((result) => {
                console.log(result);
                dispatch(SET_USER_ACTION(result.login)); // this is the line where you are setting USER inside the REDUX STORE
              })
              .catch((error) => console.log("error", error));
          }, []);
          return <>Git Hub Component, {userName}</>
}

export default GitHubComponent;