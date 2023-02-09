import axios from 'axios'
import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitHandler = async (e) => {
        
        e.preventDefault()

        try {

            const userInput = {
                email,
                password
            }

            const {data, status} = await axios.post('http://localhost:8000/auth/login', userInput)

            if (status === 200) {

                await localStorage.setItem("token", data.accessToken)

                navigate('/profile')
            } 

        } catch(err) {

        }

    }


    return (
        <Container>
            <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={ e => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={ e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Link to='/signup' className='pl-5'>Signup</Link>
            </Form>
        </Container>
        
    )
}

export default LogIn
