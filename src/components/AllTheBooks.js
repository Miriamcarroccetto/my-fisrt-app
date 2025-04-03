



import React, { useState } from 'react'
import books from './romance.json'
import LatestRelease from './LatestRelease'
import CommentArea from './CommentArea'

import { Row, Col, Container } from "react-bootstrap"

export default function AllTheBooks({searchBook}) {
  const [selected, setSelected]= useState(null)
  

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  )
  return (
  
    <Container >
      <Row>
       
        <Col md={8}>
          <LatestRelease books={filteredBooks} selected={selected} setSelected={setSelected} />
        </Col>

       
        <Col md={4}>
          <CommentArea asin={selected} /> 
        </Col>
      </Row>
    </Container>
    

    
  )
}

