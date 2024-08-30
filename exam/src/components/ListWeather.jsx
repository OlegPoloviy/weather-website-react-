import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaceholderWeather } from "../store/slices/weather.slice";
import Button from "@mui/material/Button";
import "../styles/listWeather.scss";

export function ListWeather({ showList, setStatusList }) {
    const dispatch = useDispatch();
    const weather = useSelector(store => store.weatherReducer);

    useEffect(() => {
        dispatch(getPlaceholderWeather());
    }, [dispatch]);

    return (
        <div className={"allWeatherList"}>
            <div className={"fixedTime"}>
                <Button
                    variant="outlined"
                    color="error"
                    style={{ width: "20px", height: "20px", marginTop: "20px", alignSelf: "flex-start" }}
                    onClick={() => setStatusList(false)}
                >
                    X
                </Button>
                <h3>Time</h3>
                <h3>°C</h3>
            </div>
            <div className={"time"}>
                <div className={"allHour"}>
                    {Boolean(weather.hourly) && weather.hourly.time.map((el, id) => (
                        <div key={id}>
                            {el.split("T").join("-")}
                        </div>
                    ))}
                </div>
            </div>
            <div className={"temperature"}>
                <div className={"allTemp"}>
                    {Boolean(weather.hourly) && weather.hourly.temperature_2m.map((el, id) => (
                        <div key={id}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
