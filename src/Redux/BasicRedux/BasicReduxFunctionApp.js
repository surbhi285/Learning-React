import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Toggle_Action from "./actions/action";


function BasicReduxFunctionApp(){

    // to connect my component with store we use useSelector
    // in useSelector we have to give selector and that selector is store state

    // to get the value from the store
    const toggleValue = useSelector((store) => store?.toggle);
    console.log(toggleValue, "toggleValue debug")


    // to set the value on store....    
     const dispatch = useDispatch() // transport the action object from component to reducer

    return(
        <div style={{border:"2px solid black"}}>
       <div> Hellooo Guyss..</div>
       <div>{toggleValue ? "heyy I am in DarkMode (true)": "heyy i m in light mode(false)"}</div>
       <button onClick={()=>{ dispatch(Toggle_Action())}}>Click Me</button>
        </div>
    
    )
}
export default BasicReduxFunctionApp;