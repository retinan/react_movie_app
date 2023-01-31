import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

const Poster = ({movie}) => {
    return (
        <Col className={"m-3"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Poster;