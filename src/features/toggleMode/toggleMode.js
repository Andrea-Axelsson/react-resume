import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name: 'toggleMode',
    initialState: {
        buttonToggle: false,
    },

    reducers:{
        buttonToggle: state => {
            state.buttonToggle = !state.buttonToggle
        },
    }
})

export const {buttonToggle} = toggleSlice.actions
export default toggleSlice.reducer