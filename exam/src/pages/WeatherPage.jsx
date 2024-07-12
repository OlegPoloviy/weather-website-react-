import { getPlaceholderWeather } from "../store/slices/weather.slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function WeatherPage() {
    const dispatch = useDispatch();
    const weather = useSelector((store) => store);

    return (
        <>
            <div>
                <button onClick={() => dispatch(getPlaceholderWeather())}>
                    Show weather
                </button>
                <div style={{display:"flex"}}>
                    <div style={{width: "20%"}}>
                        {
                            Boolean(weather.hourly) && weather.hourly.time && (
                                weather.hourly.time.map((el, id) => (
                                    <div key={id}>
                                        <p>{el}</p>
                                    </div>
                                ))
                            )}
                    </div>
                    <div style={{width: "20%"}}>
                        {
                            Boolean(weather.hourly) && weather.hourly.temperature_2m.map((el, id) => (
                                <div key={id}>
                                    <p>{el}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
