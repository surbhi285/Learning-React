import {useState} from "react";

import styles from './child.module.css'


function Child1Component(props){

    const {Child1CommunicationHandler}=props;
    let[counter, setCounter]=useState(0);

    const plusButtonHandler=()=>{
        setCounter(counter+1);
        Child1CommunicationHandler("Incremented")
    }

    const minusButtonHandler=()=>{
        setCounter(counter-1);
        Child1CommunicationHandler("Decremented")
    }
    return(
        <>
        <div className={styles.container}>
        <h1>Child1</h1>
        <button onClick={plusButtonHandler}>+</button>
        <div>{counter}</div>
        <button onClick={minusButtonHandler}>-</button>
        </div>
        </>
    )
}
export default Child1Component;