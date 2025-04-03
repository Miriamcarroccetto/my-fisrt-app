import React from 'react'
import {Card} from 'react-bootstrap'


export default function SingleBook({book, selected, setSelected}) {

 
  return (

    <>
    <Card style={{ width: '18rem', 
      border: selected  === book.asin ? '2px solid red' : '1px solid #ccc',
      cursor: 'pointer'}}
      onClick={()=> setSelected(book.asin)}
      className='m-2'
      >

      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>

    
    </>
  )
}
