import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice'
const store = configureStore({

    reducer: {
        counter: counterReducer,
      }, // Add your reducers here
});

export default store;
