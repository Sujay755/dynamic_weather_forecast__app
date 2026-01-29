import { configureStore } from '@reduxjs/toolkit'
import currentReducer from '../features/current/currentSlice'
import daysReducer from '../features/day/daysSlice'
import hoursReducer from '../features/hour/hoursSlice'
import dayReducer from '../features/day/daySlice'
import celciusReducer from '../features/celcius/celciusSlice'
import cityReducer from '../features/city/citySlice'
import searchReducer from '../features/search/searchSlice'

const store = configureStore({
    reducer:{
        current : currentReducer,
        day: dayReducer,
        days : daysReducer,
        hour: hoursReducer,
        celcius: celciusReducer,
        city: cityReducer,
        search: searchReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store;