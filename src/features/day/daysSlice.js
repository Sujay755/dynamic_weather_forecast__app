import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIKEY } from "../../apikey";

export const fetchDaysWeather = createAsyncThunk('days/fetchDaysWeather',async({city})=>{
    return await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${city}&key=${APIKEY}&days=15`)
           .then(response=>response.data.forecast.forecastday.map(item=>item))
})

const daysSlice = createSlice({
    name: 'days',
    initialState: {
        loading: false,
        forecastDay: [],
        error: ''
        },
    extraReducers:builder=>{
        builder.addCase(fetchDaysWeather.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchDaysWeather.fulfilled,(state,action)=>{
            state.loading = false;
            state.forecastDay = action.payload;
            state.error = ''
        })
        builder.addCase(fetchDaysWeather.rejected,(state,action)=>{
            state.loading = false;
            state.forecastDay = [];
            state.error = action.error.message
        })
    }
})

export default daysSlice.reducer;