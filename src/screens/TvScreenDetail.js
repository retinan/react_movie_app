import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row, Table, Image} from "react-bootstrap";
import { useParams} from 'react-router-dom'
import { Helmet } from 'react-helmet';



const TvScreenDetail = () => {


    const [tv, setTv] = useState({})

    const params = useParams();

    console.log(params)

    // ajax 통신 방법
    // fetch && axios
    const getTv = async () => {
        try {
            // network
            const url = `https://api.themoviedb.org/3/tv/${params.id}?api_key=7f6a4f904182d1f7e0944a8537389b2d&language=en-US`
            const { data, status } = await axios.get(url)

            if (status === 200 ) {
                console.log(data)
                setTv(data)
            }

        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect(()=>{
        getTv()
    },[])

    return (
        <>
        <Helmet>
            <title>{tv.title}</title>
        </Helmet>
        <Container>
            <Row className='p-5'>
                <div>
                <Image src={"https://image.tmdb.org/t/p/w500" + tv.poster_path} style={{ width: '20rem' }}/>
                </div>
                <h1 className='mt-3'>{tv.original_title}</h1>
                <hr />
                <p>{tv.overview}</p>
                <Table striped bordered className='mt-3'>
                    <tbody>
                        <tr>
                            <td>release_date</td>
                            <td>{tv.release_date}</td>
                        </tr>
                        <tr>
                            <td>original_language</td>
                            <td>{tv.original_language}</td>
                        </tr>
                        <tr>
                            <td>vote_average</td>
                            <td>{tv.vote_average}</td>
                        </tr>
                        <tr>
                            <td>vote_count</td>
                            <td>{tv.vote_count}</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
        </>
    );
};

export default TvScreenDetail;