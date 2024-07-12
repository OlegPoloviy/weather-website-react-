import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import App from './App.jsx'
import {router} from "./routing/router.jsx";
import {store} from "./store/index.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>

)
