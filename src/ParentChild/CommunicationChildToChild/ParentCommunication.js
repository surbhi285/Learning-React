import { useState } from "react";
import styles from "./child.module.css"
import Child1Component from "./Child1Communication";
import Child2Component from "./Child2Communication";

function Parent (){

    const[info, setIncOrDec] = useState("")

    const Child1CommunicationHandler = (info)=>{
        console.log("Parent Info", info);
        setIncOrDec(info)

    }

    return (
        <div className={styles.ParentContainer}>
        <Child1Component Child1CommunicationHandler={Child1CommunicationHandler}/>
        <Child2Component isIncOrDec={info}/>
        </div>
    )

}
export default Parent;