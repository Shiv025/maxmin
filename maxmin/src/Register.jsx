import React, {useState} from 'react';
import './App.css'

const Register = (props) => {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const[name, setName] = useState('');

    const haddleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className="container">
    
    <form className="register-form" onSubmit={haddleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='enter your name' id='name' name='name'/>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='enter your email' id='email' name='email'/>
        <label htmlFor="pass">Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="text" placeholder="***********"/>
        <button type="submit" className="btn">Login</button>
        <p className='p-tag'>Already Have an Account?</p>
    <button onClick={()=> props.onFormSwitch('login')} className="btn">Login here</button>
    </form>
    
    </div>
  )
}

export default Register;