import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function SingleBook({book, selected, setSelected}) {

  
  return (

    <>
    <Card data-testid="book-card" style={{ width: '18rem', 
      border: selected  === book.asin ? '2px solid red' : '1px solid #ccc',
      cursor: 'pointer'}}
      onClick={()=> setSelected(book.asin)}
      className='m-1'
      >

      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Button variant='secondary'as={Link } to= {`/book/${book.asin}`}>Dettagli</Button> 
      </Card.Body>
    </Card>

    
    </>
  )
}
