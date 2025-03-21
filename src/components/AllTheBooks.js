import React, {useState} from 'react'
import SingleBook from './SingleBook'
import { Container, Row, Col, Form } from 'react-bootstrap'
import books from './romance.json'

export default function AllTheBooks() {

  const [searchBook, setSearchBook] = useState ("")

  const handleSearchChange = (e) => {
    setSearchBook(e.target.value);
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  )
  return (
    <Container>
      <Form.Group className='mb-4'      as={Col} md="6" controlId="validationCustom03">
         
          <Form.Control  type="text" placeholder="Titolo del Libro..."  required value={searchBook} onChange={handleSearchChange}/>
          
        </Form.Group>
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
