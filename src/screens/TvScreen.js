import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import Poster from "../components/Poster";
import { Helmet } from 'react-helmet';


const TvScreen = () => {

    const [tvs, setTvs] = useState([])

    // ajax 통신 방법
    // fetch && axios
    const getTvs = async () => {
        try {
            // network
            const url = "https://api.themoviedb.org/3/tv/popular?api_key=7f6a4f904182d1f7e0944a8537389b2d&language=en-US&page=1"
            const { data, status } = await axios.get(url)

            if (status === 200 ) {
                console.log(data.results)
                setTvs(data.results)
            }


        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect(()=>{
        getTvs()
    },[])

    return (
        <>
        <Helmet>
            <title>Tv List</title>
        </Helmet>
        <Container>tvs
            {tvs && tvs.length}
            <Row>
                {tvs && tvs.map(tv => (
                    // <>
                    //     <h3>{movie.title}</h3>
                    //     <p>{movie.overview}</p>
                    //     <hr/>
                    // </>
                    <Poster path='tv' movie={tv} />

                ))}
            </Row>
        </Container>
        </>
        
    );
};

export default TvScreen;