import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'


import '../styles/navi.css'

const Navi = () => {



  const [email, setEmail] = useState('');

  const getToken = async () => {

    const localToken = localStorage.getItem('token')

    if (localToken) {

      try {

        const headerConfig = {
          headers: {
            Authorization: 'Bearer ' + localToken
          }
        }

        const { data, status } = await axios.get('http://localhost:8000/auth', headerConfig)

        if (status === 200) {
          setEmail(data.email)
        }

      } catch (err) {
        console.log(err.message)
      }

    }
    
  }


  const Logout = () => {
    localStorage.removeItem('token')


  }

  useEffect(() => {
    getToken()
  }, []);



  return (
    <div className='sidebar'>
      <Navbar className='d-none d-md-block'>
        <div className="sidebar-sticky"></div>
          <Navbar.Brand href="/">Movie App</Navbar.Brand>
          <Nav className='flex-column'>
            <Nav.Link href="/movie">Movie</Nav.Link>
            <Nav.Link href="/tv">Tv</Nav.Link>
            { email ? 
                <>
                <Nav.Link href="/profile">{email}</Nav.Link>
                <Button variant='warning' onClick={()=> Logout()}>Logout</Button>
                </>
                :
                <Nav.Link href="/login"><Button>Login</Button></Nav.Link>
            }
          </Nav>
      </Navbar>
    </div>
    
  )
}



export default Navi
