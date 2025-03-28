
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

import CommentArea from './components/CommentArea';


function App() {
  return (
    <>
    <div className="App">
      <MyNav/>

    
      
      <Welcome/>

      <AllTheBooks/>
      <CommentArea/>

      <MyFooter/>



    </div>
    </>
  );
}

export default App;
