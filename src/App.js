import React from 'react';
import ReactDOM from "react-dom/client";
import {
    RouterProvider,
} from "react-router-dom";
import router from "./router";
import Navi from './components/Navi'
import Footer from './components/Footer';


const App = () => {
    return (
        <>  
            <Navi />
            <RouterProvider router={router}/>
            <Footer/>
        </>

    );
};

export default App;