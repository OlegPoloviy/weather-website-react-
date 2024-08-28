import {useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaceholderWeather } from "../store/slices/weather.slice";
import "../styles/listWeather.scss"

export function ListWeather(){
    const dispatch = useDispatch();
    const weather = useSelector(store => store);

    useEffect(() => {
        dispatch(getPlaceholderWeather())
    }, [dispatch]);

    return(
        <>
            <div className={"allWeatherList"}>
                <div className={"fixedTime"}>
                    <h3>Time</h3>
                    <h3>°C</h3>
                </div>
                <div className={"time"}>

                    <div className={"allHour"}>
                    {
                            Boolean(weather.hourly) && weather.hourly.time.map((el, id) => (
                                <div key={id}>
                                    {el.split('T')[1]}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={"temperature"}>
                    <div className={"allTemp"}>
                        {
                            Boolean(weather.hourly) && weather.hourly.temperature_2m.map((el, id) => (
                                <div key={id}>
                                    {el}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}