import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDaysWeather = createAsyncThunk('days/fetchDaysWeather',async({city})=>{
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: `${city}`, days: '3'},
        headers: {
          'X-RapidAPI-Key': 'b6c09cea84msh64f6c2377982826p1868ffjsn205d5f528179',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
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