import React from 'react'
import {Nav, Navbar, Container, Form, Col, Row, Button } from 'react-bootstrap';

export default function MyNav({searchBook, setSearchBook}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Epibooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
    <Container>
      <Form.Group className='mb-4'      as={Col} md="6" controlId="validationCustom03">
         
          <Form.Control  
          type="text" 
          placeholder="Titolo del Libro..."
          value={searchBook}
          onChange={(e)=>setSearchBook (e.target.value)} /*value={searchBook} onChange={handleSearchChange}*//>
           
        </Form.Group>
      
      <Row>
        
      </Row>
    </Container>
  </Navbar>
  )
}
