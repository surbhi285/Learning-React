import { useState } from "react";

function MultipleState(){

    let [counterState, setCounterState] = useState({
        counter: 0,
        IncDec: "neutral",
        color: "red"
    })

    const {counter, IncDec, color} = counterState
    console.log("debug props", counter, IncDec, color)
   

    const plusButtonHandler = () =>{
        setCounterState((oldValueCounterObj)=>{
            return{
                ...oldValueCounterObj, // by this color red will be there even if we incremented the value

                counter: oldValueCounterObj.counter + 1,
                IncDec: "Incremented"
               
            }
        })
    }

    const minusButtonHandler = () => {
        setCounterState((oldValueCounterObj)=>{
            return{
                ...oldValueCounterObj, // by this color red will be there even if we decremented
                counter: oldValueCounterObj.counter - 1,
                IncDec: "Decremented"
                
            }
        })
    }
return(
    <>
    <button onClick={plusButtonHandler}>+</button>
    <div>{counter}</div>
    <button onClick ={minusButtonHandler}>-</button>
    {
        IncDec
    }
    {counter < 0 ? <div>Hey you are hitting negative</div>: null}
    <div>COLOR:{color}</div>
    </>
)
}
export default MultipleState;