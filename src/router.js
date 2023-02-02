import React from 'react';
import {createBrowserRouter} from "react-router-dom";
// import MovieScreen from "./screens/MovieScreen";
// import TvScreen from "./screens/Tv Screen";
import {MovieScreen, MovieScreenDetail, TvScreen, TvScreenDetail} from './screens'

const router = createBrowserRouter([
        {
            path:"/",
            element:<MovieScreen/>
        },
        {
            path:"/movie/:id",
            element:<MovieScreenDetail/>
        },
        {
            path:"/tv",
            element: <TvScreen/>
        },
        {
            path:"/tv/:id",
            element: <TvScreenDetail/>
        },
        {
            path:"*",
            element: <h1>404 Error</h1>
        },
    ]
)

export default router;