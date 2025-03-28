import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import CommentArea from './CommentArea'

export default function SingleBook({book}) {

  const  [selected, setSelected] = useState (false)
  return (

    <>
    <Card style={{ width: '18rem', 
      border: selected ? '2px solid red' : '1px solid #ccc',
      cursor: 'pointer'}}
      onClick={()=> setSelected(!selected)}
      >

      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>

    { selected && <CommentArea/>}
    </>
  )
}
