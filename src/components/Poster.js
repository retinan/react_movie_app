import React from 'react';
import {Link} from "react-router-dom";
import {Button, Card, Col} from "react-bootstrap";

const Poster = (params) => {
    const movie = params.movie
    return (
        <Col className={"m-1"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Link to={`/${params.path}/${movie.id}`}><Button variant="primary">Go somewhere</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Poster;