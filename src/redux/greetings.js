import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk(
  'greeting/fetchGreetings',
  async () => {
    const response = await fetch('http://127.0.0.1:4000', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

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
