import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import books from './romance.json'
import { Container, Row, Col } from 'react-bootstrap'
import CommentArea from './CommentArea'
import MyFooter from './MyFooter'
//const url = 'https://striveschool-api.herokuapp.com/api/comments/'
//const apiKey = " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwOGJlNzE4Yzg1OTAwMTUyNGE5N2IiLCJpYXQiOjE3NDMwOTA5NzUsImV4cCI6MTc0NDMwMDU3NX0.Kt0JG8JsymPLIj9XryAe3gEh96b5jinypFVJmwqAMkk"

export default function BookDetails() {
    
    const {bookId} = useParams()
    const book = books.find(b => String(b.asin )=== String(bookId))
  
  return (
    <>
   <Container className='p-4'>
    <Row className='align-items-center'>
        <Col md={5}>
        <img src={book.img} alt={book.title} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        </Col>

        <Col md={4}>
        <h2>{book.title}</h2>
        <p><strong>CATEGORIA: </strong>{book.category.toUpperCase()}</p>
        <p><strong>PREZZO: </strong>{book.price}€</p>
        </Col>

        <Col md={3} className='mt-4 mb-4'>  
        <CommentArea asin={book.asin} />
        </Col>

    </Row>
   </Container>
    <MyFooter/>
    </>
  )
}
