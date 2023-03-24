import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHoursWeather = createAsyncThunk('hour/fetchHoursWeather',async({city})=>{
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: `${city}`, days: '3'},
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
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