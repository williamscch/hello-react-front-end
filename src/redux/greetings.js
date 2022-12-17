/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const path = 'http://127.0.0.1:3000/';

export const getGreeting = createAsyncThunk('greetings/getGreeting', async () => {
  const response = await fetch(path, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
  });
  const greetings = await response.json();
  return greetings;
});

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreeting.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      greeting: action.payload,
    }));
    builder.addCase(getGreeting.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getGreeting.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
  },
});

export const { greetingReducer } = greetingSlice.actions;

export default greetingSlice.reducer;
