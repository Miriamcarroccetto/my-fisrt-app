import React from 'react'
import {Alert, Container} from 'react-bootstrap';

export default function Welcome() {
  return (
    <>
     <Container className="text-center my-4">
        <h1 className="fw-bold text-primary title-effect">📚 Epibooks 📚</h1>
        
      </Container>


    {['primary', ].map((variant) => (
      <Alert key={'primary'} variant={'primary'}>
       Benvenuto in Epibooks
      </Alert>

      
    ))}
  </>
);
  
}
