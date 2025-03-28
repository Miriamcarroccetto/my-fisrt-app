import React from 'react'
import SingleComment from './SingleComment'
import { ListGroup } from 'react-bootstrap'

export default function CommentList({comments}) {
  return (
    <ListGroup style={{ color: 'black' }} className="mt-2">

      {comments.map((comment, index) => (
        <SingleComment key={index} comment={comment}/>
      ))}
    </ListGroup>
  )
}
