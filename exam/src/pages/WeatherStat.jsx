import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getPlaceholderWeather } from "../store/slices/weather.slice";
import { LineChart } from '@mui/x-charts/LineChart';
import VideoNight from '../assets/night_city.mp4';
import VideoDay from "../assets/8016-206146117_small.mp4";
import "../styles/weatherStat.scss"

export function WeatherStat() {
    const dispatch = useDispatch();
    const weatherInfo = useSelector(store => store.weatherReducer);
    const theme = useSelector((store) => store.themeReducer);

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [theme]);

    useEffect(() => {
        dispatch(getPlaceholderWeather());
    }, [dispatch]);

    const timeArray = weatherInfo.hourly?.time || [];
    const temperatureArray = weatherInfo.hourly?.temperature_2m || [];

    const validTimeArray = timeArray.map(time => new Date(time)).filter(date => !isNaN(date));
    const validTemperatureArray = temperatureArray.filter(temp => typeof temp === 'number' && !isNaN(temp));

    const minLength = Math.min(validTimeArray.length, validTemperatureArray.length);
    const finalTimeArray = validTimeArray.slice(0, minLength);
    const finalTemperatureArray = validTemperatureArray.slice(0, minLength);

    const videoSrc = theme ? VideoDay : VideoNight;

    console.log('Valid Time Array:', finalTimeArray);
    console.log('Valid Temperature Array:', finalTemperatureArray);

    return (
        <>
            <div className="container">
                <video autoPlay loop muted className="video" ref={videoRef}>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
                <div className={theme ? 'chart' : 'chart-dark'}>
                    {
                        finalTimeArray.length > 0 &&
                        finalTemperatureArray.length > 0 &&
                        <LineChart
                            xAxis={[
                                {
                                    data: finalTimeArray,
                                    scaleType: 'time',
                                    label: 'Time',
                                    labelColor: 'white',
                                    tickColor: 'white',
                                }
                            ]}
                            series={[
                                {
                                    data: finalTemperatureArray,
                                    label: 'Temperature (°C)',
                                    color: 'cyan',
                                },
                            ]}
                            width={1200}
                            height={500}
                            sx={{
                                '& .MuiChartsLegend-root': {
                                    color: 'white',
                                },
                                '& .MuiAxis-root': {
                                    color: 'white',
                                },
                                '& .MuiTooltip-root': {
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                }
                            }}
                        />
                    }
                </div>
            </div>
        </>
    );
}
