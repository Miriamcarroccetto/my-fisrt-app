import React, {useState} from 'react'
import SingleBook from './SingleBook'
import { Container, Row, Col, Form } from 'react-bootstrap'
import books from './romance.json'

export default function AllTheBooks({searchBook}) {




  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  )
  return (
    <Container>
      
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.id} md={4}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
