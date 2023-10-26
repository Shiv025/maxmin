import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import "./Button.css";
import Header from './components/Header';
import Home from './components/Home';

function App() {

const[currentForm, setCurrentForm] = useState('login');

const toggleForm = (forName) =>{
  setCurrentForm(forName)         
}
  return (
  <Router className="App">
    <Header />
    
    <div className='App'>
      
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
      
    </div>
    <Home/>
    <Routes>
      <Route path="/home" element={<Home/>} />
    </Routes>
    </Router>
    
  )
}

export default App;