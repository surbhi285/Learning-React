import { configureStore, createSlice } from "@reduxjs/toolkit";


//-----------SLICE---------
// so slice is small part of store 

export const CounterSlice = createSlice({
    name:"counter", // here we are giving name of ministore
    initialState:{counter: 0}, // giving initial value to ministore
    reducers:{      // here we are giving different actions to reducer so if want to increase the counter then increment
        increment(state, action){
        state.counter +=1; 

        /* here toolkit is creating the new object for state and then mutating the value in new state object
        return{
            ...state,
            counter: state+1
        } */

        },
        decrement (state, action){
            state.counter -=1
        }, 
        addWith(state, action){
            state.counter += action.payload
        }
    }
})  
//------STORE--------
const bigStore = configureStore({
    reducer: {counterReducer: CounterSlice.reducer},
});

export default bigStore;