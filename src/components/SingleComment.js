import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function SingleComment({comment}) {
  return (
   <li>{comment.comment}</li>
  )
}
