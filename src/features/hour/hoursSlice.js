import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHoursWeather = createAsyncThunk('hour/fetchHoursWeather',async({city})=>{
    const options = {
        method: 'GET',
        url: 'http://api.weatherapi.com/v1/forecast.json',
        params: {key: `${process.env.REACT_APP_API_KEY}`, q: `${city}`, days: '3'}
      };
    return await axios.request(options)
           .then(response=>response.data.forecast.forecastday[0].hour.map(item=>item))
})

const hoursSlice = createSlice({
    name: 'hour',
    initialState: {
        loading: true,
        forecastHour: [],
        error: ''
        },
    extraReducers:builder=>{
        builder.addCase(fetchHoursWeather.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchHoursWeather.fulfilled,(state,action)=>{
            state.loading = false;
            state.forecastHour = action.payload;
            state.error = ''
        })
        builder.addCase(fetchHoursWeather.rejected,(state,action)=>{
            state.loading = false;
            state.forecastHour = [];
            state.error = action.error.message
        })
    }
})

export default hoursSlice.reducer;