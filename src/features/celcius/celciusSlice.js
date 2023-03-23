import { createSlice } from "@reduxjs/toolkit";

const celciusSlice = createSlice({
    name: 'celcius',
    initialState:{
        celcius: false
    },
    reducers:{
        changeC:(state)=>{
            state.celcius = !state.celcius
        }
    }
})

export default celciusSlice.reducer;
export const {changeC} = celciusSlice.actions;