import { useDispatch, useSelector } from "react-redux"
import actions from "./action/action";


function CounterRedux(){

    const counter = useSelector((storeState)=>{
        console.log("store state debug", storeState);
        const{counterReducer} = storeState;
        const{counter} = counterReducer;

        return counter;
    });

    const dispatch = useDispatch();

    const incrementHandler =()=>{
        dispatch(actions.increment())
    };

    const decrementHandler=()=>{
        dispatch(actions.decrement())
    };

    const addWithHandler=()=>{
        dispatch(actions.addWith(5)) // here 5 is payload
    };

    return(
        <>
        <div>Counter</div>
        <div>{counter}</div>

        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={addWithHandler}>Add With</button>
        </>
    )
}

export default CounterRedux;