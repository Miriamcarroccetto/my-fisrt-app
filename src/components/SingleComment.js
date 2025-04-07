import React from 'react'


export default function SingleComment({comment}) {
  return (
    <div data-testid= "single-comment">
    
   <li>{comment.comment}</li>
   </div>
  )
}
