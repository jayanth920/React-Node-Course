import { createSlice } from "@reduxjs/toolkit"

export const profileSlice = createSlice({
    name:"profile",
    initialState : { value: { name: "", age: ""}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state, action) => {
            state.value = {name: "", age: ""}
        }
    }

})

export default profileSlice.reducer
export const {login, logout} = profileSlice.actions

