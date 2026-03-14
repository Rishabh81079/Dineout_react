import { createSlice } from "@reduxjs/toolkit";

const Slicer = createSlice({
    name: "slice1",
    initialState: {items:[]},
    reducers:{
        add(state,action){
            state.items.push({...action.payload,quantity:1})
        },
        increment(state,action){
           const element = state.items.find((item)=>item.id===action.payload.id)
           element.quantity += 1;
        },
        decrement(state,action){
           const element = state.items.find((item)=>item.id===action.payload.id)

            if(element.quantity>1){
                element.quantity -=1;
            }
            else
                state.items = state.items.filter(item =>item.id!=action.payload.id)
        }
    }
})

export const {increment,decrement,add} = Slicer.actions
export default Slicer.reducer