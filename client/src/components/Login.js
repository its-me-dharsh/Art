
import './Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      alert(response.data.message);
      navigate('/Profile');
    } catch (error) {
      alert('Error logging in: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="outerLogin">
        <div className="credentialsLogin">
          <h1 className='Welcome'>Welcome</h1>
          <div className="fieldsLogin">
            <label>Email</label><br />
            <input 
              type="email" 
              className="inputfieldsLogin" 
              placeholder="Enter your Email" 
              onChange={(e) => setEmail(e.target.value)} 
            /><br /><br />
            <label>Password</label><br />
            <input 
              type="password" 
              className="inputfieldsLogin" 
              placeholder="Enter your password" 
              onChange={(e) => setPassword(e.target.value)} 
            /><br /><br />
            <button style={{ marginRight: '1cm' }} className='LoginButton' onClick={handleLogin}>Login</button>
            <Link to='/SignUp'><button className='LoginButton'>Sign Up</button></Link>
          </div>
        </div>
        <div className="imageLogin">
          <img 
            src="https://img.freepik.com/premium-photo/tree-middle-with-gradient-background_811396-40035.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718236800&semt=ais_user" 
            className='img' 
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
