import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchSuggestions = createAsyncThunk(
  'search/fetchSearchSuggestions',
  async ({ query }) => {
    if (!query || query.length < 2) {
      return [];
    }
    try {
      const options = {
        method: 'GET',
        url: 'https://api.weatherapi.com/v1/search.json',
        params: {
          key: `${process.env.REACT_APP_API_KEY}`,
          q: `${query}`
        }
      };
      const response = await axios.request(options);
      return response.data || [];
    } catch (error) {
      return [];
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    suggestions: [],
    loading: false,
    query: ''
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearSuggestions: (state) => {
      state.suggestions = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchSuggestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchSuggestions.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestions = action.payload;
      })
      .addCase(fetchSearchSuggestions.rejected, (state) => {
        state.loading = false;
        state.suggestions = [];
      });
  }
});

export default searchSlice.reducer;
export const { setQuery, clearSuggestions } = searchSlice.actions;
