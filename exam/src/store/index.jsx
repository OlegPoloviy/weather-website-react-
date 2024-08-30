import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./slices/weather.slice.jsx";
import themeReducer from "./slices/themeSlice.jsx"


const reducers = {
    weatherReducer,
    themeReducer
}

export const store = configureStore({
    reducer: reducers,
    devTools: true
})
