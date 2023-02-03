import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import Poster from "../components/Poster";
import HeadTitle from '../components/HeadTitle';
import LoadingSpinner from '../components/LoadingSpinner';


const MovieScreen = () => {

    const [movies, setMovies] = useState([])
    
    const [isLoading, setIsLoading] = useState(false)



    // ajax 통신 방법
    // fetch && axios
    const getMovies = async () => {

        setIsLoading(true)

        try {
            // network
            const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=7f6a4f904182d1f7e0944a8537389b2d&language=en-US&page=1"
            const { data, status } = await axios.get(url)

            if (status === 200 ) {
                console.log(data.results)
                setMovies(data.results)
                setIsLoading(false)
            }


        } catch(err) {
            console.log(err.message)
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getMovies()
    },[])





    return (
        <>
        
        {isLoading ? <LoadingSpinner/> : null }
        
        <HeadTitle title='Movie List'/>
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