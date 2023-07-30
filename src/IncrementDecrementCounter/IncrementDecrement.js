import { useState } from "react";
import styles from "./IncrementDecrement.modules.css";

// if we dont use "useState" incrementdecrement function will not re-run hence ui will not updated 

function IncrementDecrement(){
// state -> state variable can re-run the function again from top to bottom
const[counter, setCounter] = useState(0);
// counter ->  is the latest value so it is nothing just like the number

// normal variable -> can't re-run the function again from top to bttom
    let number = 1

    const plusButtonHandler = ()=>{
       setCounter(counter+1) // this is used to increase value by 1
       //here we cant do counter++; because then counter++ react like normal variable and will not update UI
        
        // if we want to increase value by 5 then
        // for(let i=0; i<5; i++){
        //     setCounter((oldValue)=> oldValue+1)
        // }
        
        
        
        
        // console.log("Plus incrementClicked")
        // number = number+1;
        // console.log("number debug", number)
    }
    const minusButtonHandler=()=>{
         setCounter(counter-1);
        // console.log("Minus decrement clicked")
        // number = number-1;
        // console.log("number debug", number)            
    }
    return(
<>
{/*Increment button */}
<button onClick={plusButtonHandler}>+</button>

{/*Label Number */}
<div className={counter<0 ? styles.counterDanger: styles.counter}>{counter}</div>
{/* {number} */}
{counter}
{/*Decrement Button */}
<button onClick = {minusButtonHandler}>-</button>

{counter < 0 ? <div>You are hitting negative value</div>: null} 
</> 
    )
}
export default IncrementDecrement;


// usestate()->
/* const [state, setState] = useState(0);
1-> Always use setState (someValue)
2-> Dont use setstate when your new val is dependent on the oldval  then use call back
eg: setState(state +1) // this is wrong
then use call back funtion eg  setState((oldVal)=>oldVal+1) // this is correct
but this callback example is a tradeoff  for the space i.e it takes more space that is why it should not use more
*/

