import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default function MyFooter() {
  return (
    <footer className="bg-dark text-light py-4">
    <Container>
      <Row>
        <Col md={6}>
          <p>&copy; {new Date().getFullYear()} Epibooks. Tutti i diritti riservati.</p>
        </Col>
        <Col md={6} className="text-md-end">
          <a href="/privacy" className="text-light me-3">Privacy Policy</a>
          <a href="/terms" className="text-light">Termini di Servizio</a>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
