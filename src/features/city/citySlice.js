import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: 'city',
    initialState:{
        city: 'new delhi'
    },
    reducers:{
        changeCity:(state,action)=>{
            state.city = action.payload
        }
    }
})

export default citySlice.reducer;
export const {changeCity} = citySlice.actions;