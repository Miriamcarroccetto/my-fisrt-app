import { useEffect, useState } from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList' 
import {  Alert, Spinner } from 'react-bootstrap'


const url = 'https://striveschool-api.herokuapp.com/api/comments/'
const apiKey = " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwOGJlNzE4Yzg1OTAwMTUyNGE5N2IiLCJpYXQiOjE3NDMwOTA5NzUsImV4cCI6MTc0NDMwMDU3NX0.Kt0JG8JsymPLIj9XryAe3gEh96b5jinypFVJmwqAMkk"

export default function CommentArea({ asin }) {
  const [comments, setComments] = useState([])
  
  useEffect(() => {

    if (!asin) return

    const getComments = async () => {
     
     
      try {
        let response = await fetch(
         `${url}${asin}`,
          {
            headers: {
              Authorization: apiKey,
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
         
        } else {
          console.log('error')
         
        }
      } catch (error) {
        console.log(error)
       
      }
    }
  
      getComments()
    
  }, [asin])

  

  return (
    <div data-testid="comment-area" className='m-5'>
     
      {!asin && <Alert variant="danger" className='m-5'>Seleziona un libro per visualizzare le recensioni</Alert>}

      
      {comments.length > 0 && <CommentList comments={comments} />}
      
     
      { comments.length === 0 && asin && (
        <Alert variant="warning">Nessuna recensione disponibile</Alert>
      )}

      
      {asin && <AddComment asin={asin} />}
    </div>
  )
}
