import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './features/toggleMode/toggleMode.js'

const store = configureStore({
    reducer: {
        toggleMode: toggleReducer,
    },
})

export default store