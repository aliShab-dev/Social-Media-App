import { createSlice } from "@reduxjs/toolkit";


const darkMode = createSlice( {
    name:"darkModeSlice",
    initialState:{
        darkMode: JSON.parse(localStorage.getItem('mode')) || false
    },
    reducers:{
        changeMode: (state) =>{
            state.darkMode = !state.darkMode
            localStorage.setItem('mode', state.darkMode )
        }
    }
})

export const {changeMode} = darkMode.actions
export default darkMode.reducer