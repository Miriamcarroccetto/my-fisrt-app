import React from 'react'
import SingleBook from './SingleBook'
import {  Row, Col } from 'react-bootstrap'


export default function LatestRelease({books, selected, setSelected}) {

 

  

  return (
   
     
    <Row>
      {books.map((book) => (
        <Col key={book.id}  >
          <SingleBook book={book} setSelected={setSelected} selected= {selected} />
        </Col>
      ))}
      </Row>
   


     
  
  )
}

