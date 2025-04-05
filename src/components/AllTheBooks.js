import React, { useState } from 'react'
import books from './romance.json'
import LatestRelease from './LatestRelease'
import CommentArea from './CommentArea'

import { Row, Col, Container, Button } from "react-bootstrap"

export default function AllTheBooks({searchBook}) {
  const [selected, setSelected]= useState(null)
  const [visibleBooks, setVisibleBooks] = useState(3)
  const loadMore = () => { setVisibleBooks(visibleBooks + 3) }
  
 
  

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  )

  const bookShowing = filteredBooks.slice(0, visibleBooks)
  return (
  
    <Container >
      <Row>
       
        <Col >
          <LatestRelease books={bookShowing} selected={selected} setSelected={setSelected} />
        </Col>

       
       <Col md={3}>
          <CommentArea asin={selected} /> 
        </Col>
      </Row>

      {visibleBooks<filteredBooks.length && (
        <Button onClick={loadMore} variant="danger" className="m-3" > Carica di più </Button>
      )}
    </Container>
    

    
  )
}

