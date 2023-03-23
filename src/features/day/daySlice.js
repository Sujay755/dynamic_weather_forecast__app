import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIKEY } from "../../apikey";

export const fetchDayWeather = createAsyncThunk('day/fetchDayWeather',async({city})=>{
    return await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${city}&key=${APIKEY}&days=15`)
           .then(response=>response.data.forecast.forecastday[0].astro)
})

const daySlice = createSlice({
    name: 'day',
    initialState: {
        forecastDayOne: {}
        },
    extraReducers:builder=>{
        builder.addCase(fetchDayWeather.fulfilled,(state,action)=>{
            state.forecastDayOne = action.payload
        })
    }
})

export default daySlice.reducer;