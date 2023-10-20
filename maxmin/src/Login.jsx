import React from 'react'
import './App.css'
import { useState } from 'react'
//import Button from './Button'
const Login = (props) => {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');



    const haddleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className="container">
    <form className="login-form" onSubmit={haddleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='Youremail@gmail.com' id='email' name='email'/>
        <label htmlFor="Password">Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="Password" placeholder='*******' id='Password' name='Password'/>
        <button type="submit" className="btn">Login</button>
    </form>
    <p className='p-tag'>Don't have an account? Register here.</p>
    <button onClick={()=> props.onFormSwitch('register')}  className="btn">Register here</button>
    </div>
  )
}

export default Login;