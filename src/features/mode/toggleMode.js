import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkMode: localStorage.getItem('dark-mode') === true || window.matchMedia('(prefers-color-scheme: dark)').matches,
}

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkmode: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem('dark-mode', state.darkMode);
        }
    }
})

export const { toggleDarkmode } = darkModeSlice.actions;
export default darkModeSlice.reducer;