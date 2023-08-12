import React from "react";
import styles from "./child.module.css"


function Child2Component(props){

    const{isIncOrDec="neutral"} = props;

    return(
        <>
        <div className={styles.container}>
        <h2>Child2</h2>
        <h3>{isIncOrDec}</h3>
    </div> 
    
    </>
    )
}
export default Child2Component;