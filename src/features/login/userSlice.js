import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state, action) => {
        state.name = action.payload;
      },
      logout: (state) => {
        state.name = '';
      },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;