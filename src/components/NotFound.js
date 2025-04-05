import React from 'react'
import { Button, Col, Container, Row, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
        {[
        
        'danger'
        
      ].map((danger) => (
        <Alert key={danger} variant={danger}>
          ERROR 404: Pagina non trovata! <br/>
          La pagina che stai cercando non esiste. <br/>
        </Alert>
      ))}
          
          
          <Button as={Link} to="/" variant="primary">
            Torna alla Home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
