
import './App.css';
import React, { useState } from "react"
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

      <AllTheBooks searchBook={searchBook}/>
      <CommentArea/>

      <MyFooter/>



    </div>
    </>
  );
}

export default App;
