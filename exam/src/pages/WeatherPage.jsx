import { getPlaceholderWeather } from "../store/slices/weather.slice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Video from '../assets/8016-206146117_small.mp4';
import "../styles/weatherPage.scss";

export function WeatherPage() {
    const dispatch = useDispatch();
    const weather = useSelector((store) => store);

    const [message, setMessage] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentTemperature, setCurrentTemperature] = useState(null);

    // Оновлення часу
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        dispatch(getPlaceholderWeather());
    }, [dispatch]);

    useEffect(() => {
        const hours = currentTime.getHours();
        if (hours >= 18 || hours < 6) {
            setMessage("Good evening");
        } else if (hours >= 6 && hours < 12) {
            setMessage("Good morning");
        } else if (hours >= 12 && hours < 16) {
            setMessage("Good day to you");
        } else if (hours >= 16 && hours < 18) {
            setMessage("Good afternoon");
        } else {
            setMessage("I don't know what time exactly you have now :(");
        }

        console.log("Weather data:", weather);

        if (weather && weather.hourly) {
            const currentHourIndex = weather.hourly.time.findIndex((timeString) => {
                const date = new Date(timeString);
                return date.getHours() === hours;
            });

            console.log("Current hour index:", currentHourIndex);

            // Встановлюємо температуру для поточної години
            if (currentHourIndex !== -1) {
                setCurrentTemperature(weather.hourly.temperature_2m[currentHourIndex]);
            } else {
                console.log("Current hour index not found");
            }
        } else {
            console.log("Weather data or hourly data is not available");
        }
    }, [currentTime, weather]);

    const hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, "0");
    const seconds = String(currentTime.getSeconds()).padStart(2, "0");

    return (
        <>
            <div className={"container"}>
                <video autoPlay loop muted className={"video"}>
                    <source src={Video} />
                </video>
                <div className={"weather-container"}>
                    <h2 className={"message"}>{message}</h2>
                    <div className={"time_weather"}>
                        <h2 className={"time"}>
                            {hours}:{minutes}:{seconds}
                        </h2>
                        {currentTemperature !== null && (
                            <h3 className={"weather_current"}>{currentTemperature}°C</h3>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
