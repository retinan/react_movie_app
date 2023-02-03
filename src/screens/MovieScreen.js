import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import Poster from "../components/Poster";
import { Helmet } from 'react-helmet';


const MovieScreen = () => {

    const [movies, setMovies] = useState([])

    // ajax 통신 방법
    // fetch && axios
    const getMovies = async () => {
        try {
            // network
            const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=7f6a4f904182d1f7e0944a8537389b2d&language=en-US&page=1"
            const { data, status } = await axios.get(url)

            if (status === 200 ) {
                console.log(data.results)
                setMovies(data.results)
            }


        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect(()=>{
        getMovies()
    },[])

    return (
        <>
        <Helmet>
            <title>Movie List</title>
        </Helmet>
        <Container>
            {movies && movies.length}
            <Row>
                {movies && movies.map(movie => (<Poster path='movie' movie={movie} />)
                
                    // <>
                    //     <h3>{movie.title}</h3>
                    //     <p>{movie.overview}</p>
                    //     <hr/>
                    // </>
                   

                )}
            </Row>
        </Container>
        </>

    );
};

export default MovieScreen;