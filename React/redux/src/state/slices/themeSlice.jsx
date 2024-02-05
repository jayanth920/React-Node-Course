// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 'light',
// };

// export const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme: (state) => {
//       state.value = state.value === 'light' ? 'dark' : 'light';
//     },
//   },
// });

// export const { toggleTheme } = themeSlice.actions;

// export default themeSlice.reducer;

import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    value : "",
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.value = action.payload;
        }
    }
})

export default themeSlice.reducer
export const {changeTheme} = themeSlice.actions

















