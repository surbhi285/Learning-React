import React from "react";
import styles from "./ByeComponent.module.css"


function ByeComponent(props){
    const{name}=props;

    return(
        <>
        {/* <div style={{color: "red", backgroundColor:"cyan"}}>Bye guys!!!</div> */}
        <div className={styles.bye}>Bye !!! </div>
        <div>name={name}</div>
        </>
    )
}
export default ByeComponent;

// here color and backgroundcolor is property, not the attribute