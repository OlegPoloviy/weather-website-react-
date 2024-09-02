import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {WeatherPage,ErrorPage,MapPage,WeatherStat,AboutPage} from "../pages";


export const router = createBrowserRouter([
    {
        path: "/",
        Component:App,
        children:[
            {
                path:"/",
                Component:WeatherPage,
            },
            {
                path:"/map",
                Component:MapPage
            },
            {
                path:"/stat",
                Component:WeatherStat
            },
            {
                path:"/about",
                Component:AboutPage
            }
        ]

    },
    {
        path: "*",
        Component: ErrorPage
    }

])