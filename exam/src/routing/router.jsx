import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {ErrorPage} from "../pages/ErrorPage.jsx";
import {WeatherPage} from "../pages/WeatherPage.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        Component:App,
        children:[
            {
                path:"/",
                Component:WeatherPage,
            }
        ]

    },
    {
        path: "*",
        Component: ErrorPage
    }

])