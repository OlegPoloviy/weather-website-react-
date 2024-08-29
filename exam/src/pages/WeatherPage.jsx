import { getPlaceholderWeather } from "../store/slices/weather.slice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BurgerMenu } from "../components/BurgerMenu.jsx";
import { ListWeather } from "../components/ListWeather.jsx";
import Video from '../assets/night_city.mp4';
import Sun from "../assets/sun-removebg-preview.png";
import "../styles/weatherPage.scss";

export function WeatherPage() {
    const dispatch = useDispatch();
    const weather = useSelector((store) => store);

    const [message, setMessage] = useState("");
    const [showList, setStatusList] = useState(false);
    const [weatherIcon, setWeatherIcon] = useState(Sun);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentTemperature, setCurrentTemperature] = useState(null);

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

        if (weather.hourly && weather.hourly.precipitation[0] === 0) {
            setWeatherIcon(Sun);
        }

        if (weather && weather.hourly) {
            const currentHourIndex = weather.hourly.time.findIndex((timeString) => {
                const date = new Date(timeString);
                return date.getHours() === hours;
            });

            if (currentHourIndex !== -1) {
                setCurrentTemperature(weather.hourly.temperature_2m[currentHourIndex]);
            }
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
                <div className={"Burger"} onClick={() => setStatusList(true)}>
                    {
                        !showList &&
                        <BurgerMenu />
                    }
                </div>
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
                    <div className={"image-container"}>
                        <img src={weatherIcon} alt="" />
                    </div>
                </div>
            </div>
            {
                showList &&
                <ListWeather showList={showList} setStatusList={setStatusList} />
            }
        </>
    );
}
