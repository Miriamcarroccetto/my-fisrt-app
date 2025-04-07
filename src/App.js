import './App.css'
import React, { useState } from "react"
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import NotFound from './components/NotFound'
import BookDetails from './components/BookDetails'



export default function App() {

  const [searchBook, setSearchBook]= useState("")
  
   

  return (
    <BrowserRouter>
    <div className='App'>
      <MyNav searchBook={searchBook} setSearchBook={setSearchBook} />
      <Routes>
        <Route path='/' element={<>
          <Welcome/>
      <Container>
        <Row>
          <Col >
          <AllTheBooks searchBook={searchBook}/>
          </Col>
        </Row>
        </Container>
        <MyFooter/>
        </>
        }/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/book/:bookId' element={<BookDetails  />}/>
        </Routes>
        

      
     
   
      
    </div>
    </BrowserRouter>
    
  )
}

