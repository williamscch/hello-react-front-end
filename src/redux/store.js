import { configureStore } from '@reduxjs/toolkit';
import greetingRedux from './greetings';

const store = configureStore({
  reducer: {
    greeting: greetingRedux,
  },
});

export default store;
