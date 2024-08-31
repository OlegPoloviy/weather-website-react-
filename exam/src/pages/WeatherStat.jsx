import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlaceholderWeather } from "../store/slices/weather.slice";
import { LineChart } from '@mui/x-charts/LineChart';

export function WeatherStat() {
    const dispatch = useDispatch();
    const weatherInfo = useSelector(store => store.weatherReducer);

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

    console.log('Valid Time Array:', finalTimeArray);
    console.log('Valid Temperature Array:', finalTemperatureArray);

    return (
        <>
            <div style={{marginTop:"120px"}}>
                {
                    finalTimeArray.length > 0 &&
                    finalTemperatureArray.length > 0 &&
                    <LineChart
                        xAxis={[
                            {
                                data: finalTimeArray,
                                scaleType: 'time',
                                label: 'Time',
                            }
                        ]}
                        series={[
                            {
                                data: finalTemperatureArray,
                                label: 'Temperature (°C)',
                            },
                        ]}
                        width={1200}
                        height={500}
                    />
                }
            </div>
        </>
    );
}
