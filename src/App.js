import React from 'react';
import './App.css';
import LandingPage from './Pages/landing_page';
import PostView from './Pages/PostView';
import Form from '../src/Pages/form'
import  {BrowserRouter,Route,Routes} from "react-router-dom";

 
function App() {
  return (
    <div className="wrapper">
      
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/PostView' element={<PostView/>}/>
        <Route path='/form' element={<Form/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}
 
export default App;
