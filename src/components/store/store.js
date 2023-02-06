import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../darkMode/darkMode'
import authUserReducer from "../authenticationUser/authUser";
import authUser from "../authenticationUser/authUser";

const store= configureStore({
    reducer: {
        darkMode: darkModeReducer,
        authUser: authUserReducer
    }
})

export default store
