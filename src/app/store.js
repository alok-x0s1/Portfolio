import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/mode/toggleMode"

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer
    }
})

export default store;