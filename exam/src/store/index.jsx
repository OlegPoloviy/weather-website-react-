import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./slices/weather.slice.jsx";

export const store = configureStore({
    reducer: weatherReducer,
    devTools: true
})
