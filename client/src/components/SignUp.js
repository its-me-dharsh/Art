
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/signup', { name, email, password });
      alert(response.data.message);
    } catch (error) {
      alert('Error signing up: ' + error.response.data.error);
    }
  };

  return (
    <div className='main'>
    <div className='SignUpPage' style={{height:'900px'}}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <div className="outer" >
        <div className="credentials"style={{margin:'100px'}}>
          <h2 className='h2'>Discover the Artist within you...</h2>
          <div className="fields">
            <label>Name</label><br></br>
            <input type="text" className="inputfields" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}></input><br></br><br></br>
            <label>Email</label><br></br>
            <input type="email" className="inputfields" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>
            <label>Password</label><br></br>
            <input type="password" className="inputfields" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br>
            <label>Confirm Password</label><br></br>
            <input type="password" className="inputfields" placeholder="Enter your password" onChange={(e) => setConfirmPassword(e.target.value)}></input><br></br><br></br>
            <Link to='/Login'><button style={{ marginRight: '1cm' }} className='SignUpButton'>Login</button></Link>
            <button className='SignUpButton' onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
