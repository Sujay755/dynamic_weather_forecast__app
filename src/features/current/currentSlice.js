import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentWeather = createAsyncThunk('current/fetchCurrentWeather',async({city})=>{
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: `${city}`},
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
    return await axios.request(options)
           .then(response=>response.data)
})

const currentSlice = createSlice({
    name: 'current',
    initialState: {
        loading: false,
        current: {},
        location: {},
        condition: {},
        error: ''
        },

    extraReducers:builder=>{
        builder.addCase(fetchCurrentWeather.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchCurrentWeather.fulfilled,(state,action)=>{
            state.loading = false
            state.current = action.payload.current;
            state.location = action.payload.location;
            state.condition = action.payload.current.condition;
            state.error = ''
        })
        builder.addCase(fetchCurrentWeather.rejected,(state,action)=>{
            state.loading = false;
            state.current = {};
            state.location = {};
            state.condition = {};
            state.error = action.error.message;
        })
    }
})

export default currentSlice.reducer;