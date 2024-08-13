import { getPlaceholderWeather } from "../store/slices/weather.slice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export function WeatherPage() {
    const dispatch = useDispatch();
    const weather = useSelector((store) => store);

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    const formattedTime = weather.hourly?.time.map((timeString) => {
        const date = new Date(timeString);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    });

    return (
        <>
            <div>
                <button onClick={() => dispatch(getPlaceholderWeather())}>
                    Show weather
                </button>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "20%" }}>
                        {
                            formattedTime && formattedTime.map((time, id) => (
                                <div key={id}>
                                    <p>{time}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div style={{ width: "20%" }}>
                        {
                            weather.hourly?.temperature_2m.map((el, id) => (
                                <div key={id}>
                                    <p>{el}°C</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2>{hours}:{minutes}:{seconds}</h2>
                </div>
            </div>
        </>
    );
}
