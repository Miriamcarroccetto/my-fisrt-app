import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const url = 'https://striveschool-api.herokuapp.com/api/comments'
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwOGJlNzE4Yzg1OTAwMTUyNGE5N2IiLCJpYXQiOjE3NDMwOTA5NzUsImV4cCI6MTc0NDMwMDU3NX0.Kt0JG8JsymPLIj9XryAe3gEh96b5jinypFVJmwqAMkk"


export default function AddComment ({ asin })  {
    const [comment, setComment] = useState({
      comment: '',
      rate: 1,
      elementId: null,
    })
  
  
    useEffect(() => {
      setComment((c) => ({
        ...c,
        elementId: asin,
      }))
    }, [asin])
  
  
    const sendComment = async (e) => {
        e.preventDefault()
        try {
          let response = await fetch(
            url,
            {
              method: 'POST',
              body: JSON.stringify(comment),
              headers: {
                'Content-type': 'application/json',
                'Authorization': apiKey,
              },
            }
          )
          if (response.ok) {
            alert('La tua recensione è stata inviata con successo!')
            setComment({
              comment: '',
              rate : 1,
              elementId: null,
            })
          }
        } catch (error) {
          console.log("Invio fallito"+ error)
        }
      }
    

      
    
  
  
    return (
      <div className="my-3">
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi qui la tua recensione..."
              value={comment.comment}
              onChange={(e) =>
                setComment({
                  ...comment,
                  comment: e.target.value,
                })
                

              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={comment.rate}
              onChange={(e) =>
                setComment({
                  ...comment,
                  rate: parseInt(e.target.value),
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="secondary" type="submit" onClick={sendComment}>
            Invia
          </Button>
        </Form>
      </div>
    )
  }
  
 