import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {ErrorPage} from "../pages/ErrorPage.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        Component:App,
    },
    {
        path: "*",
        Component: ErrorPage
    }

])