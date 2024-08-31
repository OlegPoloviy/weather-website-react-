import {useDispatch,useSelector} from "react-redux";
import { getPlaceholderWeather } from "../store/slices/weather.slice";
import { LineChart } from '@mui/x-charts/LineChart';

export function WeatherStat(){
    const dispatch = useDispatch();
    const weatherInfo = useSelector(store => store.weatherReducer);
}