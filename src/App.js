import React from 'react';
import {
    RouterProvider,
} from "react-router-dom";
import router from "./router";
import Footer from './components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Navi from './components/Navi';


const App = () => {
    return (
        <>  
            <Row>
                <Col xs={3} id="sidebar-wrapper">      
                    <Navi />
                </Col>
                <Col xs={9} id="page-content-wrapper" className='mt-5 mb-5'>
                    <RouterProvider router={router}/>
                    <Footer/>
                </Col> 
            </Row>
        </>

    );
};

export default App;