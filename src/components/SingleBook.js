import React from 'react'
import {Card} from 'react-bootstrap'

export default function SingleBook({book}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}
