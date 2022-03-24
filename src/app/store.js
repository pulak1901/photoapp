import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/login/userSlice';
import {loadState} from './localStorage'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: loadState()
});
