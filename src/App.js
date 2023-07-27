import HelloComponent from "./HelloComponent";
import IncrementDecrement from "./IncrementDecrementCounter/IncrementDecrement";
import ByeComponent from "./ByeComponent";
import { useState } from "react";
function App(){

    const [name, setName] = useState("user");

    const changenameHandler = ()=>{
        setName("Monika")
    } 

    return (
    <>
    <h1>This is app js</h1>
    {/* <HelloComponent name={"surbhi"} standard={"9th"}/> */}
    <ByeComponent name={name}/>
    {/* <IncrementDecrement /> */}
    

    {/* button that changes name  in bye component*/ }
    <button onClick={changenameHandler}>Change Name</button>
    </>
    )
    
}
export default App;