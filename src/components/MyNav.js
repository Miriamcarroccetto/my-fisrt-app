import React from 'react'
import {Nav, Navbar, Container, Form, Col, Row,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from './Epibooks logo.png'

export default function MyNav({searchBook, setSearchBook}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><img src={img}  alt="Epibooks Logo" style={{maxWidth: '100%', maxHeight: '75px', objectFit: 'cover'  }}/>  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className='nav-link'>Home</Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>

    
    <Container>
      <Form.Group className='float-md-end' as={Col} md="6" controlId="validationCustom03">
         
          <Form.Control  
          type="text" 
          placeholder="Titolo del Libro..."
          value={searchBook}
          onChange={(e)=>setSearchBook (e.target.value)}/>
          
        </Form.Group>
      
      <Row>
        
      </Row>
    </Container>
  </Navbar>
  )
}
