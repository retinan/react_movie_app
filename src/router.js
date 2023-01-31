import React from 'react';
import {createBrowserRouter} from "react-router-dom";
// import MovieScreen from "./screens/MovieScreen";
// import TvScreen from "./screens/Tv Screen";
import {MovieScreen, TvScreen} from './screens'

const router = createBrowserRouter([
        {
            path:"/",
            element:<MovieScreen/>
        },
        {
            path:"/tv",
            element: <TvScreen/>
        },
        {
            path:"*",
            element: <h1>404 Error</h1>
        },
    ]
)

export default router;