import {createSlice} from "@reduxjs/toolkit";
import {getWeatherInfo} from "../services/weather.service.jsx";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: [],
    reducers:{
        getFetchWeather: (store,{payload}) => {
            return payload;
        }
    }
});

const {getFetchWeather} = weatherSlice.actions;

export const getPlaceholderWeather = () => (dispatch) =>{
    getWeatherInfo()
        .then(res => res.json())
        .then(weather => {
            dispatch(getFetchWeather(weather));
        })
}

export default weatherSlice.reducer;