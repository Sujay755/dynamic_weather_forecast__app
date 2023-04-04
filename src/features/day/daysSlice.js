import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDaysWeather = createAsyncThunk('days/fetchDaysWeather',async({city})=>{
    const options = {
        method: 'GET',
        url: 'http://api.weatherapi.com/v1/forecast.json',
        params: {key: `${process.env.REACT_APP_API_KEY}`,q: `${city}`, days: '3'}
      };
    return await axios.request(options)
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