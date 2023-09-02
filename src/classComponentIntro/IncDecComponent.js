import React from "react";


// to get props -> this.props;
// to get state -> this.state;
// to get setState -> 1. Inititalisation(ony in constructor case) 2. this.setState()
class Hello extends React.Component{
     constructor(props){
        super(props);
        this.name = "abcd";
 // 1st way to set state it can only be used with constructor
// by this we initialize the state
        this.state = {
            counter: 0,
        };
     }
      // here oldvalue is counter 0 so by spreadoperator we are taking all property 
     plusButtonHandler(){
        this.setState(oldvalue=>{
            return{
                ...oldvalue,
                counter: oldvalue.counter + 1
            }
        })
     }

     minusButtonHandler(){
        this.setState(oldvalue=>{
            return{
                ...oldvalue,
                counter: oldvalue.counter-1
            }
        })
     }
    render(){
        const {counter} = this.state;
        return(
            <>
            <button onClick={this.plusButtonHandler.bind(this)}>+</button>

{/*Label Number */}
<div>{counter}</div>


{/*Decrement Button */}
<button onClick = {this.minusButtonHandler.bind(this)}>-</button>

{counter < 0 ? <div>You are hitting negative value</div>: null} 
</>
        ) 
    }
}
export default Hello;