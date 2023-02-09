import axios from 'axios';
import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'



const SignUp = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        
        e.preventDefault()
        
        try {

            const userInput = {
                username,
                email,
                password

            }

            const { data, status } = await axios.post('http://localhost:8000/auth/signup', userInput)

            if (status === 201) {
                
                navigate("/login")

            } else {
                console.log(status, data)
            }


        } catch(err) {
            console.log(err.message)
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={ e => setUsername(e.target.value)} />
                <Form.Text className="text-muted">
                We'll never share your username with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Link to='/login' className='pl-5'>Login</Link>
            </Form>
        </Container>
        
    )
}

export default SignUp
