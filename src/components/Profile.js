import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';

const Profile = () => {


    const [userInfo, setUserInfo] = useState({});

    // data get 함수
//1
    const getUserInfo = async () => {

        try {


            const token = localStorage.getItem('token').toString()

            const headerConfig = {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }

            const { data, status } = await axios.get('http://localhost:8000/auth', headerConfig)

            if (status === 200) {
                console.log(data)
                setUserInfo(data)
            }

        } catch(err) {
            console.log(err.messange)
        }
    }


    // 자동 실행
//2
    useEffect(() => {
        getUserInfo()
    }, []);


    return (
        <Container>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{userInfo.username}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{userInfo.email}</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile
