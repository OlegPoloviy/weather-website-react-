import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./slices/weather.slice.jsx";
import themeReducer from "./slices/themeSlice.jsx";
import geolocationReducer from "./slices/geolocationSlice.jsx"


const reducers = {
    weatherReducer,
    themeReducer,
    geolocationReducer
}

export const store = configureStore({
    reducer: reducers,
    devTools: true
})
