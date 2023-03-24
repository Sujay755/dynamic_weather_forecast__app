import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDayWeather = createAsyncThunk('day/fetchDayWeather',async({city})=>{
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