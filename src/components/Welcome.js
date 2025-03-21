import React from 'react'
import {Alert, Container} from 'react-bootstrap';

export default function Welcome() {
  return (
    <>
     <Container className="text-center my-4">
        <h1 className="fw-bold text-secondary title-effect">📚 Epibooks 📚</h1>
        
      </Container>


    {['secondary', ].map((variant) => (
      <Alert key={'secondary'} variant={'secondary'}>
       Esplora mondi infiniti, una pagina alla volta. Scopri il libro perfetto per te!
      </Alert>

      
    ))}
  </>
);
  
}
