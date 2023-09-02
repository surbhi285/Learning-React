import { useState } from "react";


function Forms() {

    const defaultValOfForms = {
        FirstName:"",
        LastName:"",
        Email: "",
        PhoneNumber:"",
        dob:"",
        Gender:"",
        tnc:false
    }

    const [formState, setFormState] = useState(defaultValOfForms) // saving latest values in obj so that send data to server
    console.log(formState, "form state")


    const changeHandler = (event, key)=>{
        const value=event.target.value;
        console.log(value, key, "key value pair")

        setFormState((oldState)=>{
            return{
                ...oldState,
                [key]:value,
            }
        })
    }


return(
    <>
    <h1>Forms</h1>
    <br />
    <label>Fist Name*</label>
    <input onChange={(event)=>(changeHandler(event, "FirstName"))} type="text"></input>
    <br />
    <label>Last Name</label>
    <input onChange={(event)=>(changeHandler(event, "LastName"))} type="text"></input>
    <br />
    <label>Email*</label>
    <input onChange={(event)=>(changeHandler(event, "Email"))} type="mail"></input>
    <br />
    <label>Gender*</label>  
    <select>
        <option value={1}>Male</option>
        <option value={2}>Female</option>
    </select>
    <br />
    <label>Phone Number*</label>
    <input onChange={(event)=>(changeHandler(event, "PhoneNumber"))} type="number"></input>
    <br />
    <label>DOB</label>
    <input onChange={(event)=>(changeHandler(event, "dob"))} type="date"></input>
    <br />
    <input type="checkbox"></input>
    <label>Terms and conditions</label>
    <br />
    <button type="button">Submit</button>
    </>
)


}
export default Forms;

