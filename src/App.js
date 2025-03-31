
import './App.css';
import React, { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import CommentArea from './components/CommentArea';


function App() {

   const [searchBook, setSearchBook] = useState ("")
  return (
    <>
    <div className="App">
      <MyNav searchBook={searchBook}  setSearchBook={setSearchBook}/>
      
      <Welcome/>

      <Container>
        <Row>
          
          <Col md={8}>
            <AllTheBooks searchBook={searchBook} />
          </Col>

         
          <Col md={4}>
            <CommentArea />
          </Col>
        </Row>
      </Container>


      <MyFooter/>



    </div>
    </>
  );
}

export default App;
