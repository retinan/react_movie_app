import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

import '../styles/navi.css'

const Navi = () => {
  return (
    <div className='sidebar'>
      <Navbar className='d-none d-md-block'>
        <div className="sidebar-sticky"></div>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Nav className='flex-column'>
          <Nav.Item>
            <Nav.Link href="/">Movie</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/tv">Tv</Nav.Link>
            </Nav.Item>
          </Nav>
      </Navbar>
    </div>
    
  )
}



export default Navi
