


import './App.css'
import React, { useState } from "react"

import { Container, Row, Col } from 'react-bootstrap'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'



export default function App() {

  const [searchBook, setSearchBook]= useState("")

  return (
    <div className='App'>
      <MyNav searchBook={searchBook} setSearchBook={setSearchBook}/>
      <Welcome/>
      <Container>
        <Row>
          <Col >
          <AllTheBooks searchBook={searchBook}/>
          </Col>
        </Row>
        </Container>
        <MyFooter/>
      
    </div>
  )
}

