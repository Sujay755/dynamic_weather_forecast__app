import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIKEY } from "../../apikey";

export const fetchHoursWeather = createAsyncThunk('hour/fetchHoursWeather',async({city})=>{
    return await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${city}&key=${APIKEY}&days=2`)
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